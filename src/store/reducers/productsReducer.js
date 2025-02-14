import { createSlice } from '@reduxjs/toolkit'

export const productReducer = createSlice({
    name: 'product',
    initialState: {
        productsSort: [],
    },
    reducers: {
        sortProducts: (state, action) => {
            //console.log(action.payload);
            if (action.payload == 1) {
                console.log(1);
            }else if (action.payload == 2) {
                console.log(2);
            }

        }
    }
})

export const { sortProducts } = productReducer.actions

export default productReducer.reducer