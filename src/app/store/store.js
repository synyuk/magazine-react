import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "../../Features/Basket/store/basketReducer";
import productsReducer from "../../Features/Products/store/productsReducer";

export default configureStore({
    reducer: {
        basket: basketReducer,
        product: productsReducer,
    },
})