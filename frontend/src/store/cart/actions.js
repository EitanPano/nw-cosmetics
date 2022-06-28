// import { orderService } from '../../services/order.service';
import { getProductById } from '../../services/product.service';
import { localStore } from '../../services/utils';

export const loadCartItems = () => async (dispatch) => {
    const cartItems = localStore.get('cartItems');
    dispatch({ type: 'LOAD_CART_ITEMS', cartItems });
};

export const addToCart = (productId, qty) => async (dispatch, getState) => {
    try {
        const product = await getProductById(productId);
        if (!product.inStockCount) return;
        const cartItem = {
            _id: product._id,
            name: product.name,
            price: product.price,
            image: product.image,
            inStockCount: product.inStockCount,
            quantity: qty,
        };
        dispatch({ type: 'ADD_CART_ITEM', item: cartItem });
        const { cartItems } = getState().cartModule;
        localStore.set('cartItems', cartItems);
    } catch (err) {
        dispatch({ type: 'SET_ERROR', error: err.message });
    }
};

export const removeFromCart = (itemId) => (dispatch, getState) => {
    dispatch({ type: 'REMOVE_CART_ITEM', itemId });
    const { cartItems } = getState().cartModule;
    localStore.set('cartItems', cartItems);
};

export const updateCartItem = (item) => (dispatch, getState) => {
    dispatch({ type: 'UPDATE_CART_ITEM', item });
    const { cartItems } = getState().cartModule;
    localStore.set('cartItems', cartItems);
};

export const changeQuantity = (productId, qty) => (dispatch, getState) => {
    const itemToUpdate = { _id: productId, quantity: qty };
    dispatch({ type: 'CHANGE_QUANTITY', itemToUpdate });

    const { cartItems } = getState().cartModule;
    localStore.set('cartItems', cartItems);
};
