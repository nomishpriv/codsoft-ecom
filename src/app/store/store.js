import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../slices/productSlice";

const store = configureStore({
    reducer: {
        posts: productReducer,
    }
})

export default store