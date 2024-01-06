import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./Components/Wishlist/wishlistSlice.jsx";


export const store = configureStore({
  reducer: {
   
    wishlist: wishlistReducer,
 
  },
});