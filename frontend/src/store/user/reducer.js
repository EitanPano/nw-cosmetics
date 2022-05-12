const initialState = {
    users: [],
    selectedUser: null,
    filterBy: null,
    userMessage: null
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_USERS':
            return { ...state, users: action.users };

        case 'SET_MESSAGE':
            return { ...state, userMessage: action.message}
        
        default:
            return state;
    }
};
