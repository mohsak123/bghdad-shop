import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;

      const cartItemExistInCart = state.cartItems.find(
        (cartItem) => cartItem.id === newItem.id
      );

      if (cartItemExistInCart) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === newItem.id ? newItem : item
        );
      } else {
        state.cartItems = [...state.cartItems, newItem];
      }
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

const cartAction = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export { cartAction, cartReducer };
