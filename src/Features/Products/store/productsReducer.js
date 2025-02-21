import { createSlice } from "@reduxjs/toolkit";

export const productReducer = createSlice({
    name: "product",
    initialState: {
        products: []
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = Object.values(action.payload)
            //console.log(action.payload);
            //console.log(Object.values(action.payload));
        },
        sortProducts: (state, action) => {
            //console.log(action.payload);
            if (action.payload === "1") {
                state.products = [...state.products].sort((a, b) => a.price - b.price);
            } else if (action.payload === "2") {
                state.products = [...state.products].sort((a, b) => b.price - a.price);
            }
        },
        showCategory: (state, action) => {
            console.log(action.payload);
            state.products = [...state.products].filter(product => product.category === action.payload);
        }
    },
});

export const { setProducts, sortProducts, showCategory } = productReducer.actions;
export default productReducer.reducer;
