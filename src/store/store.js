import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "../Components/Basket/basketReducer";

export default configureStore({
    reducer: {
        basket: basketReducer,
    },
})