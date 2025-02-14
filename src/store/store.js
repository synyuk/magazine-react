import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "./reducers/basketReducer";
import productsReducer from "./reducers/productsReducer";

export default configureStore({
    reducer: {
        basket: basketReducer,
        products: productsReducer,
    },
})