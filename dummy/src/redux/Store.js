import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/ProductSlice"
import wishlistreducer from "./slice/Wishlistslice"
import cartreducer from './slice/Cartslice'

const store = configureStore({
  reducer: {
    products: productReducer,
    wishlist:wishlistreducer,
    cart:cartreducer
  }
});

export default store;