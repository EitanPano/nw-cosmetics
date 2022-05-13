// import { userService } from '../../services/user.service';

let timeoutId;

export const setUserMessage = (message = '', variant = 'success') => {
    return (dispatch) => {
        clearTimeout(timeoutId);
        dispatch({ type: 'SET_MESSAGE', userMessage: {} });
        timeoutId = setTimeout(() => {
            dispatch({ type: 'SET_MESSAGE', userMessage: {} });
        }, 3000);
        dispatch({ type: 'SET_MESSAGE', userMessage: {message, variant}});
    };
};
