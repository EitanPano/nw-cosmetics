import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { productReducer } from './product/reducer';
import { userReducer } from './user/reducer';
import { cartReducer } from './cart/reducer';

const reducer = combineReducers({
    productModule: productReducer,
    userModule: userReducer,
    cartModule: cartReducer
})

export const store = configureStore({reducer});
