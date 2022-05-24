import { httpService } from './http.service';
import { sessionStore } from './utils';

const SESSION_KEY = 'loggedUser';
const ROUTE_KEY = 'auth';

export const authService = {
    logIn,
    logOut,
    signUp,
    getIsNameExist
};


async function signUp(userCreds) {
    try {
        const user = await httpService.post(`${ROUTE_KEY}/signup`, userCreds);
        return sessionStore.set(SESSION_KEY, user);
    } catch (err) {
        console.log(err);
    }
}

async function logIn(userCreds) {
    try {
        const user = await httpService.post(`${ROUTE_KEY}/login`, userCreds);
        return sessionStore.set(SESSION_KEY, user);
    } catch (err) {
        console.log(err);
    }
}

async function logOut() {
    sessionStorage.removeItem(SESSION_KEY);
    return await httpService.post(`${ROUTE_KEY}/logout`);
}

async function getIsNameExist(someName) {
    try {
        if (!someName) return;
        const name = await httpService.get(`${ROUTE_KEY}/${someName}`);
        // const product = await lassoService.get(`${ROUTE_KEY}/${productId}`)
        return name;
    } catch (err) {
        // console.log('err: ', err);
        throw err;
    }
}
