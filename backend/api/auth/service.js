import bcrypt from 'bcrypt';
import userService from '../user/service.js';
import logger from '../../services/logger.service.js';

async function signUp(userCreds) {
    const saltRounds = 10;
    const password = await bcrypt.hash(userCreds.password, saltRounds);

    return userService.add({ ...userCreds, password });
}

async function logIn({ username, password }) {
    const user = await userService.getByName(username);
    if (!user) return Promise.reject('Invalid username or password');
    const passMatch = await bcrypt.compare(password, user.password);
    if (!passMatch) return Promise.reject('Invalid username or password');

    delete user.password;
    return user;
}

export default { signUp, logIn };
