// import { userService } from '../../services/user.service';

let timeoutId;

export const setUserMessage = (message) => {
    return (dispatch) => {
        clearTimeout(timeoutId);
        dispatch({ type: 'SET_MESSAGE', message: null });
        timeoutId = setTimeout(() => {
            dispatch({ type: 'SET_MESSAGE', message: null });
        }, 3000);
        dispatch({ type: 'SET_MESSAGE', message });
    };
};
