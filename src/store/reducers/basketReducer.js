import { createSlice } from '@reduxjs/toolkit'
import products from "../../Components/Products/Products";

export const basketReducer = createSlice({
    name: 'basket',
    initialState: {
        products: [],
    },
    reducers: {
        addToCard: (state, action) => {
            const counter = state.products.find(product => product.id === action.payload);
            if (counter) {
                counter.count += 1;
            } else {
                state.products.push({ id: action.payload, count: 1 });
            }
        },
        removeToCard: (state, action) => {
            const index = state.products.findIndex(product => product.id === action.payload);
            if (index !== -1) {
                state.products.splice(index, 1);
            }
        },
        removeAllFromCards: (state, action) => {
            console.log('removeAllFromCards');
            state.products = [];
        },
        decrementProduct: (state, action) => {
            const counter = state.products.find(product => product.id === action.payload);
            const index = state.products.findIndex(product => product.id === action.payload);
            //console.log(counter.count);
            if (counter) {
                counter.count < 2 ? (counter.count = 0,  state.products.splice(index, 1)) : counter.count -= 1;
            } else {
                state.products.push({ id: action.payload, count: 1 });
            }
        },
        incrementProducts: (state, action) => {
            const counter = state.products.find(product => product.id === action.payload);
            if (counter) {
                counter.count += 1;
            } else {
                state.products.push({ id: action.payload, count: 1 });
            }
        }

    }
})

export const { addToCard, removeToCard, removeAllFromCards, decrementProduct, incrementProducts } = basketReducer.actions

export default basketReducer.reducer