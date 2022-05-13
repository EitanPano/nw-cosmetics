// import { orderService } from '../../services/order.service';
import { getProductById } from '../../services/product.service';
import { localStore } from '../../services/utils';

export const loadCartItems = () => async (dispatch) => {
    const cartItems = localStore.get('cartItems')
    // console.log('cartItems', cartItems)
    dispatch({ type: 'LOAD_CART_ITEMS', cartItems });
};

export const addToCart = (productId, qty) => async (dispatch, getState) => {
    try {
        const product = await getProductById(productId);
        const cartItem = {
            _id: product._id,
            name: product.name,
            price: product.price,
            image: product.image,
            inStockCount: product.inStockCount,
            quantity: qty,
        };
        dispatch({ type: 'ADD_CART_ITEM', item: cartItem });
        const { cartItems } = getState().cartModule
        console.log('cartItems', cartItems)
        localStore.set('cartItems', cartItems)
    } catch (err) {
        dispatch({ type: 'SET_ERROR', error: err.message });
    }
};

export const changeQuantity = (productId, qty) => (dispatch, getState) => {
    const itemToUpdate = {_id: productId, quantity: qty}
    dispatch({ type: 'CHANGE_QUANTITY',  itemToUpdate});

    const { cartItems } = getState().cartModule
    localStore.set('cartItems', cartItems)
}