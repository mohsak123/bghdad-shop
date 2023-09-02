import { cartAction } from "../slices/cartSlice";

// Add Item To Cart
export function addToCart(newItem) {
  return (dispatch, getState) => {
    dispatch(cartAction.addItemToCart(newItem));

    const { cart } = getState();
    localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));
  };
}

// Remove Item From Cart
export function removeFormCart(id) {
  return (dispatch, getState) => {
    dispatch(cartAction.removeItemFromCart(id));
    const { cart } = getState();
    localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));
  };
}
