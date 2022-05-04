import express from 'express';
import { log } from '../../middlewares/logger.middleware.js';
import { requireAuth, requireAdmin } from '../../middlewares/requireAuth.middleware.js';
import { validateData } from '../../middlewares/jsonValidate.middleware.js';
import { getProducts, getProductById, addProduct, updateProduct, removeProduct } from './controller.js';
const router = express.Router();

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', log, getProducts);
router.get('/:id', getProductById);

router.post('/', validateData, addProduct);
// router.post('/', requireAuth, requireAdmin, addProduct)
router.put('/:id', validateData, updateProduct);
// router.put('/:id', requireAuth, requireAdmin, updateProduct)
router.delete('/:id', removeProduct);
// router.delete('/:id', requireAuth, requireAdmin, removeProduct)

export default router;
