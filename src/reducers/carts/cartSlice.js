import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalCount: 0,
    productsList: [],

}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addProductCart:(state, action) =>{
            state.productsList = [...state.productsList, action.payload],
            state.totalCount +=1
        }
    }
})