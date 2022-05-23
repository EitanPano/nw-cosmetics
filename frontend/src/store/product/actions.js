import { productService } from '../../services/product.service';

export const loadProducts = (filterBy) => {
    return async (dispatch, getState) => {
        if (!filterBy) filterBy = getState().productModule.filterBy;
        // const { filterBy } = getState().productModule;
        try {
            const products = await productService.query(filterBy);
            dispatch({ type: 'LOAD_PRODUCTS', products });
        } catch (err) {
            dispatch({type: 'SET_ERROR', error: err.message})
        }
    };
};

export const getProductById = (productId) => {
    return async (dispatch) => {
        try {
            const product = await productService.getById(productId);
            dispatch({ type: 'SET_PRODUCT', product });
        } catch (err) {
            dispatch({type: 'SET_ERROR', error: err.message})
        }
    };
}

export const saveProduct = (product) => {
    return async (dispatch) => {
        try {
            const addedProduct = await productService.save(...product);
            if (product._id) dispatch({ type: 'UPDATE_PRODUCT', product: addedProduct });
            else dispatch({ type: 'ADD_PRODUCT', product: addedProduct });
        } catch (err) {
            dispatch({type: 'SET_ERROR', error: err.message})
        }
    };
}

export const removeProduct = (productId) => {
    return async (dispatch) => {
        try {
            productService.remove(productId);
            dispatch({ type: 'REMOVE_ITEM', productId });
        } catch (err) {
            dispatch({type: 'SET_ERROR', error: err.message})
        }
    };
}

export const setFilterBy = (filterBy) => {
    return (dispatch) => {
        dispatch({ type: 'SET_FILTER_BY', filterBy });
    };
}
