import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "./reducers/basketReducer";

export default configureStore({
    reducer: {
        basket: basketReducer,
    },
})