import express from 'express';
import { log } from '../../middlewares/logger.middleware.js';
// import { requireAuth, requireAdmin } from '../../middlewares/requireAuth.middleware.js';
import { validateData } from '../../middlewares/jsonValidate.middleware.js';
import { signUp, logIn, logOut, getUserByName } from './controller.js';
const router = express.Router();

// middleware that is specific to this router
// router.use(requireAuth)


router.get('/:name', log, getUserByName);
router.post('/signup', validateData, signUp)
router.post('/login', logIn)
router.post('/logout', logOut)

export default router;
