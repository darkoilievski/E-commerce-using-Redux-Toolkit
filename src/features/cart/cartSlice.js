import { createSlice } from "@reduxjs/toolkit";
import cartItmes from "../../cartItems";

const initialState = {
  cartItems: cartItmes,
  amount: 2,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
});

// console.log(cartSlice);

export default cartSlice.reducer; // exporting the reducer property only so later i can controll the inital state
