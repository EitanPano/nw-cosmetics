// import { userService } from '../../services/user.service';

let userMessageTimeoutID;

export const setUserMessage = (message = '', variant = 'success') => {
    return (dispatch) => {
        clearTimeout(userMessageTimeoutID);
        dispatch({ type: 'SET_MESSAGE', userMessage: {} });
        userMessageTimeoutID = setTimeout(() => {
            dispatch({ type: 'SET_MESSAGE', userMessage: {} });
        }, 3000);
        dispatch({ type: 'SET_MESSAGE', userMessage: {message, variant}});
    };
};
