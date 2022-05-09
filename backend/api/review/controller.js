import reviewService from './service.js';
import productService from '../product/service.js';
import userService from '../user/service.js';
import logger from '../../services/logger.service.js';

async function getReviews(req, res) {
    try {
        // const reviews = await reviewService.query(req.query);
        const reviews = await reviewService.query(req.body);
        console.log(req.body);
        res.json(reviews);
    } catch (err) {
        logger.error('Cannot get reviews', err);
        res.status(500).send({ err: 'Failed to get reviews' });
    }
}

async function addReview(req, res) {
    try {
        const review = req.body;
        // review.byUserId = req.session.user._id;
        const { productId, userId } = review;

        // Prepare the added review and the linked collections.
        const [addedReview, product, user] = await Promise.all([
            reviewService.add(review),
            productService.getById(productId),
            userService.getById(userId),
        ]);

        // Change the linked colletions fields.
        product.reviewCount++;
        product.rating += review.rating / product.reviewCount;
        user.reviewCount++;
        user.points += user.reviewCount >= 5 ? 0 : 5;

        // Update the linked collections with the changed fields.
        const [aboutProduct, byUser] = await Promise.all([
            productService.update(product),
            userService.update(user),
        ]);

        // Assign the updated linked collections to the fullReview object.
        const fullReview = { ...addedReview, aboutProduct, byUser };
        
        // console.log('CTRL SessionId:', req.sessionID);
        // socketService.broadcast({type: 'review-added', data: review, userId: review.byUserId})
        // socketService.emitToUser({type: 'review-about-you', data: review, userId: review.aboutUserId})
        // socketService.emitTo({type: 'user-updated', data: fullUser, label: fullUser._id})

        res.send(fullReview);
    } catch (err) {
        logger.error('Failed to add review', err);
        res.status(500).send({ err: 'Failed to add review' });
    }
}

async function deleteReview(req, res) {
    try {
        await reviewService.remove(req.params.id);
        res.send({ msg: 'Deleted successfully' });
    } catch (err) {
        logger.error('Failed to delete review', err);
        res.status(500).send({ err: 'Failed to delete review' });
    }
}

export { getReviews, addReview, deleteReview };
