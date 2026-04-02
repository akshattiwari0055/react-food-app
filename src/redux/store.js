import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./castSlice"
 export const store = configureStore({
    reducer:{
        cart:cartSlice
    }
 })