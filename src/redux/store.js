import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./feature/LoginSlice";
import productSlice from "./feature/ProductSlice";
import productByIdSlice from "./feature/ProductByIdSlice";
import GetAllUserById from "./feature/GetAllUserById";



const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        product: productSlice.reducer,
        getprobyid: productByIdSlice.reducer,
        getuserbyid: GetAllUserById.reducer
     
    }
});

export default store;