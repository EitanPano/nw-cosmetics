const initialState = {
    users: [],
    selectedUser: null,
    filterBy: null,
    userMessage: {}
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_USERS':
            return { ...state, users: action.users };

        case 'SET_MESSAGE':
            return { ...state, userMessage: action.userMessage}
        
        default:
            return state;
    }
};
