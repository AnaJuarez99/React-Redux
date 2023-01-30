import { configureStore } from "@reduxjs/toolkit";

import userReducer from '../reducers/users/userSlice';
import cartSlice from '../reducers/carts/cartSlice';


export const store = configureStore({
    reducer:{
        user: userReducer,
        cart: cartSlice
    },
})