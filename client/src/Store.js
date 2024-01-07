import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./Components/Wishlist/wishlistSlice.jsx";
import basketReducer from "./Components/Basket/BasketSlice.jsx";

export const store = configureStore({
  reducer: {
   
    wishlist: wishlistReducer,
    basket: basketReducer
  },
});