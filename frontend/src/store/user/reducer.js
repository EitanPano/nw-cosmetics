const initialState = {
    users: [],
    selectedUser: null,
    filterBy: null,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_USERS':
            return { ...state, users: action.users };

        default:
            return state;
    }
};
