const initialState = {
    cartItems: [],
};

const getIdx = (arr, id) => arr.findIndex(item => item._id === id);

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'LOAD_CART_ITEMS':
            return { ...state, cartItems: [...action.cartItems] };


        case 'ADD_CART_ITEM':
            const idx = getIdx(state.cartItems, action.item._id)
            if (idx < 0) return { ...state, cartItems: [...state.cartItems, action.item] };
            else return {
                    ...state, cartItems: [
                        ...state.cartItems.filter((item) => item._id !== action.item._id),
                        action.item
                    ],
                };

        case 'UPDATE_CART_ITEM':
            return {
                ...state,
                cartItems: state.cartItems.reduce((acc, item) => {
                    acc.push((item._id === action.item._id) ? action.item : item)
                    return acc
                }, [])
            }

        case 'REMOVE_CART_ITEM':
            return { ...state, cartItems: state.cartItems.filter(item => item._id !== action.itemId) };


        case 'CHANGE_QUANTITY':
            const idxToUpdate = getIdx(state.cartItems, action.itemToUpdate._id);
            const cartItems = [...state.cartItems]
            const cartItem = {...cartItems[idxToUpdate]}
            cartItem.quantity = action.itemToUpdate.quantity
            cartItems.splice(idxToUpdate, 1, cartItem)
            return {...state, cartItems}



        default: return state; 
    }
};
