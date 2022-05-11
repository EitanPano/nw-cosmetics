const initialState = {
    products: [],
    selectedProduct: null,
    filterBy: null,
    error: null
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_PRODUCTS':
            // console.log('action: ', action.type);
            return { ...state, products: [...action.products], error: null };

        case 'SET_PRODUCT':
            // console.log('action: ', action.type);
            return { ...state, selectedProduct: action.product, error: null };

        case 'ADD_PRODUCT':
            // console.log('action: ', action.type);
            return { ...state, products: [...state.products, action.product] };

        case 'UPDATE_PRODUCT':
            // console.log('action: ', action.type);
            return {
                ...state,
                products: state.products.map((product) =>
                    product._id === action.product._id ? action.product : product ),
            };

        case 'REMOVE_PRODUCT':
            // console.log('action: ', action.type);
            return { 
                ...state,
                products: state.products.filter(product => product._id === action.productId)
            };

        case 'SET_ERROR':
            // console.log('action: ', action)
            return { ...state, error: action.error }

        default:
            return state;
    }
};
