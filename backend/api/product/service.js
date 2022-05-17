import dbService from '../../services/db.service.js';
import logger from '../../services/logger.service.js';
import { ObjectId } from 'mongodb';

async function query(filterBy) {
    try {
        const [criteria, sortCriteria] = _buildCriterias(filterBy);

        const collection = await dbService.getCollection('product');
        const products = await collection
            .find(criteria)
            .sort(sortCriteria)
            .toArray();
        return products;
    } catch (err) {
        logger.error('cannot find products', err);
        throw err;
    }
}

async function getById(productId) {
    try {
        const collection = await dbService.getCollection('product');
        const product = collection.findOne({ _id: ObjectId(productId) });
        return product;
    } catch (err) {
        logger.error(`while finding product ${productId}`, err);
        throw err;
    }
}

async function add(product) {
    try {
        delete product._id;
        const collection = await dbService.getCollection('product');
        const { insertedId } = await collection.insertOne(product);
        product._id = ObjectId(insertedId);

        logger.info(`Product ID: ${product._id} has been added.`);
        return product;
    } catch (err) {
        logger.error('cannot insert product', err);
        throw err;
    }
}

async function update(product) {
    try {
        const _id = ObjectId(product._id);
        const updatedProduct = {
            ...product,
            _id,
            updatedAt: Date.now(),
        };

        const collection = await dbService.getCollection('product');
        await collection.updateOne({ _id }, { $set: { ...updatedProduct } });

        logger.info(`Product ID: ${updatedProduct._id} has been updated.`);
        return updatedProduct;
    } catch (err) {
        logger.error(`cannot update product ${product._id}`, err);
        throw err;
    }
}

async function remove(productId) {
    try {
        const collection = await dbService.getCollection('product');
        await collection.deleteOne({ _id: ObjectId(productId) });

        logger.info(`Product ID: ${productId} has been removed.`);
        return productId;
    } catch (err) {
        logger.error(`cannot remove product ${productId}`, err);
        throw err;
    }
}

function _buildCriterias(filterBy) {
    const criteria = {};
    const sortCriteria = {};
    const { sortBy } = filterBy
    // console.log('for criteria',filterBy)
    // if (filterBy.search) {
    // const txtCriteria = { $regex: filterBy.search, $options: 'i' }
    // criteria.name = txtCriteria
    // }
    // if (filterBy.stock === 'In Stock') {
    //     criteria.inStock = { $eq: true }
    // } else if (filterBy.stock === 'Out Of Stock') {
    //     criteria.inStock = { $eq: false }
    // }
    // if (filterBy.labels && filterBy.labels.length) {
    //         criteria.labels = { $in: filterBy.labels }
    //         // criteria.labels = { $all: filterBy.labels }
    // }

    // if (sortBy) {
    //     if (sortBy === 'Name') sortCriteria.name = 1;
    //     else if (sortBy === 'Price') sortCriteria.price = 1;
    //     else sortCriteria.createAt = 1;
    // }

    // console.log('criteria:', criteria);
    return [criteria, sortCriteria];
}

async function _createProducts() {
    const collection = await dbService.getCollection('products');
    await collection.insertMany([]);
}

export default {
    query,
    getById,
    add,
    update,
    remove,
};
