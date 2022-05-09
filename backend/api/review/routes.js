import express from 'express';
import { log } from '../../middlewares/logger.middleware.js';
// import { requireAuth, requireAdmin } from '../../middlewares/requireAuth.middleware.js';
import { validateData } from '../../middlewares/jsonValidate.middleware.js';
import { getReviews, addReview, deleteReview } from './controller.js';
const router = express.Router();

router.get('/', log, getReviews);
router.post('/', validateData, addReview);
// router.post('/',  log, requireAuth, addReview)
router.delete('/:id', deleteReview);
// router.delete('/:id',  requireAuth, deleteReview)

export default router;
