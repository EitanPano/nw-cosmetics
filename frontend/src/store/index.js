import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { productReducer } from './product/reducer';
import { userReducer } from './user/reducer';

const reducer = combineReducers({
    productModule: productReducer,
})

export const store = configureStore({reducer});
