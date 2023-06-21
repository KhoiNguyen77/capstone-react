import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Reducer/userReducer';
import productReducer from './Reducer/productReducer';


export const store = configureStore({
    reducer: {
        userReducer: userReducer,
        productReducer: productReducer
    }
})