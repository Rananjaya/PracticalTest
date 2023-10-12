import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./feature/LoginSlice";


const store = configureStore({
    reducer: {
        login: loginSlice.reducer
    }
});

export default store;