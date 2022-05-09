import dbService from '../../services/db.service.js';
import { ObjectId } from 'mongodb';
import { toUpperFirst } from '../../services/util.service.js';
import asyncLocalStorage from '../../services/als.service.js';
import logger from '../../services/logger.service.js'

async function query(filterBy = {}) {
    try {
        const criteria = _buildCriteria(filterBy);
        const pipeline = _getPipeLine(criteria, ['user', 'product']);
        const collection = await dbService.getCollection('review');
        let reviews = await collection.aggregate(pipeline).toArray();
        reviews.map((review) => {
            delete review.userId;
            delete review.productId;
            return reviews;
        });
        return reviews;
    } catch (err) {
        logger.error('cannot find reviews', err);
        throw err;
    }
}

async function add(review) {
    try {
        const addedReview = {
            ...review,
            userId: ObjectId(review.userId),
            productId: ObjectId(review.productId),
        };

        const collection = await dbService.getCollection('review');
        await collection.insertOne(addedReview);

        delete addedReview.userId;
        delete addedReview.productId;
        return addedReview;
    } catch (err) {
        logger.error('cannot insert review', err);
        throw err;
    }
}

async function remove(reviewId) {
    try {
        // const store = asyncLocalStorage.getStore()
        // const { userId, isAdmin } = store
        const collection = await dbService.getCollection('review');
        // remove only if user is owner/admin
        // if (!isAdmin) criteria.byUserId = ObjectId(userId)
        await collection.deleteOne({ _id: ObjectId(reviewId) });
    } catch (err) {
        logger.error(`cannot remove review ${reviewId}`, err);
        throw err;
    }
}

function _buildCriteria(filterBy) {
    const criteria = {
        $or: [
            { userId: ObjectId(filterBy.byUserId) },
            { productId: ObjectId(filterBy.aboutProductId) },
        ],
    };

    return criteria;
}

function _getPipeLine(criteria, refs) {
    const pipeline = [{ $match: criteria }];

    refs.forEach((ref) => {
        const $lookup = {
            from: ref,
            localField: ref + 'Id',
            foreignField: '_id',
            as: `${ref === 'user' ? 'by' : 'about'}${toUpperFirst(ref)}`,
        };
        const $unwind = `${ref === 'user' ? '$by' : '$about'}${toUpperFirst(ref)}`;
        pipeline.push({ $lookup }, { $unwind });
    });

    return pipeline;
}

export default {
    query,
    remove,
    add,
};
