const initialState = {
    products: [],
    selectedProduct: null,
    filterBy: null,
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_PRODUCTS':
            console.log('action: ', action.type);
            return { ...state, products: [...action.products] };

        case 'SET_PRODUCT':
            console.log('action: ', action.type);
            return { ...state, selectedProduct: action.product };

        case 'ADD_PRODUCT':
            console.log('action: ', action.type);
            return { ...state, products: [...state.products, action.product] };

        case 'UPDATE_PRODUCT':
            console.log('action: ', action.type);
            return {
                ...state,
                products: state.products.map((product) =>
                    product._id === action.product._id ? action.product : product ),
            };

        case 'REMOVE_PRODUCT':
            console.log('action: ', action.type);
            return { 
                ...state,
                products: state.products.filter(product => product._id === action.productId)
            };

        default:
            return state;
    }
};
