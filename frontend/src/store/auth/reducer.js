import { sessionStore } from "../../services/utils";

const initialState = {
    loggedUser: sessionStore.get('loggedUser') || null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOGGED_USER':
            return { ...state, loggedUser: action.user };

        default:
            return state;
    }
};
