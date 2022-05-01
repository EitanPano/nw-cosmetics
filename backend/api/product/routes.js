import express from 'express';
// const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
import { log } from '../../middlewares/logger.middleware.js';
import { getProducts, getProductById, addProduct, updateProduct, removeProduct } from './controller.js';
const router = express.Router();

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', log, getProducts);
router.get('/:id', getProductById);

router.post('/', addProduct);
// router.post('/', requireAuth, requireAdmin, addProduct)
router.put('/:id', updateProduct);
// router.put('/:id', requireAuth, requireAdmin, updateProduct)
router.delete('/:id', removeProduct);
// router.delete('/:id', requireAuth, requireAdmin, removeProduct)

export default router;
