import authService from './service.js';
import logger from '../../services/logger.service.js';

async function signUp(req, res) {
    try {
        const newUser = req.body;
        const user = await authService.signUp(newUser);
        res.json(user);
        console.log('user: ', user);
    } catch (err) {
        logger.error('Failed to create a new user', err);
        res.status(500).send({ err: 'Failed to sign-up.' });
    }
}

async function logIn(req, res) {
    try {
        const userCreds = req.body;
        const user = await authService.logIn(userCreds);
        res.json(user);
    } catch (err) {
        logger.error('Failed to log-in', err);
        res.status(500).send({ err: 'Log-In failed, check input fields.' });
    }
}

async function logOut(req, res) {
    try {
        req.session.destroy()
        res.send({ msg: 'Logged out successfully' })
    } catch (err) {
        logger.error('Failed to log-out', err);
        res.status(500).send({ err: 'Failed to log-out' });
    }
}

export { signUp, logIn, logOut };
