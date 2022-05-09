import express from 'express';
import { log } from '../../middlewares/logger.middleware.js';
import { requireAuth, requireAdmin } from '../../middlewares/requireAuth.middleware.js';
import { validateData } from '../../middlewares/jsonValidate.middleware.js';
import { getUsers, getUserById, addUser, updateUser, removeUser } from './controller.js';
const router = express.Router();

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', log, getUsers);
router.get('/:id', log, getUserById);

router.post('/', validateData, addUser);
// router.post('/', requireAuth, requireAdmin, addUser)
router.put('/:id', validateData, updateUser);
// router.put('/:id', requireAuth, requireAdmin, updateUser)
router.delete('/:id', removeUser);
// router.delete('/:id', requireAuth, requireAdmin, removeUser)

export default router;