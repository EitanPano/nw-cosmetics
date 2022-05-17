import authService from './service.js';
import userService from '../user/service.js'
import logger from '../../services/logger.service.js';

async function signUp(req, res) {
    try {
        const newUser = req.body;
        newUser.isAdmin = false
        // console.log(newUser);
        const user = await authService.signUp(newUser);
        req.session.user = user
        res.json(user);
        // console.log('user: ', user);
    } catch (err) {
        logger.error('Failed to create a new user', err);
        res.status(500).send({ err: 'Failed to sign-up.' });
    }
}

async function logIn(req, res) {
    try {
        const userCreds = req.body;
        const user = await authService.logIn(userCreds);
        req.session.user = user
        res.json(user);
    } catch (err) {
        logger.error('Failed to log-in', err);
        res.status(500).send({ err: 'Log-In failed, check input fields.' });
    }
}

async function logOut(req, res) {
    try {
        req.session.destroy()
        // req.session.user = null;
        res.send({ msg: 'Logged out successfully' })
    } catch (err) {
        logger.error('Failed to log-out', err);
        res.status(500).send({ err: 'Failed to log-out' });
    }
}

async function getUserByName(req, res) {
    try {
        // console.log(req.params);
        const user = await userService.getByName(req.params.name);
        res.send(user);
    } catch (err) {
        logger.error('Failed to get user', err);
        res.status(500).send({ err: 'Failed to get user' });
    }
}

export { signUp, logIn, logOut, getUserByName };
