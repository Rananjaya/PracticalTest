import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./feature/LoginSlice";
import productSlice from "./feature/ProductSlice";


const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        product: productSlice.reducer
    }
});

export default store;