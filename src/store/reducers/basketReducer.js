import { createSlice } from '@reduxjs/toolkit'

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
        }

    }
})

export const { addToCard, removeToCard, removeAllFromCards } = basketReducer.actions

export default basketReducer.reducer