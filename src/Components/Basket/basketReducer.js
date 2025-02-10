import { createSlice } from '@reduxjs/toolkit'

export const basketReducer = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        //addItem: (state, action) => [...state, action.payload] ,
        addItem: (state, action) => {
            //console.log(action.payload);
            state.push(action.payload);
        },
        removeItem: (state, action) => {
            //console.log(action.payload);
            return state.filter(state => state !== action.payload);
            //console.log([...state]);
        }
    }
})

export const { addItem, removeItem } = basketReducer.actions

export default basketReducer.reducer