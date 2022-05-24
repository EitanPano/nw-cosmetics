import { authService } from "../../services/auth.service";


export const logIn = (userCreds) => async (dispatch) => {
    try {
        const user = await authService.logIn(userCreds);
        dispatch({ type: 'SET_LOGGED_USER', user });
        return user;
    } catch (err) {
        throw err;
    }
}

export const signUp = (userCreds) => async (dispatch) => {
    try {
        const user = await authService.signUp(userCreds);
        dispatch({ type: 'SET_LOGGED_USER', user });
        return user;
    } catch (err) {
        throw err;
    }
}

export const logOut = () => async (dispatch) => {
    try {
        await authService.logOut();
        dispatch({ type: 'SET_LOGGED_USER', user: null });
    } catch (err) {
        throw err
    }
}

export const getIsNameExist = (someName) => async () => {
    try {
        const name = await authService.getIsNameExist(someName);
        return name;
    } catch (err) {
        // console.log('err: ', err);
        throw err;
    }
}