import { productActions } from "../slices/productSlice";

// Fetch Product
export function fetchProducts() {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      dispatch(productActions.setProducts(data));
    } catch (error) {
      console.log(error);
    }
  };
}

// Get Product By Id
export function getProductById(productId) {
  return async (dispatch) => {
    try {
      dispatch(productActions.setLoading());
      const response = await fetch(
        `http://localhost:5000/products/${productId}`
      );
      const data = await response.json();
      dispatch(productActions.setProduct(data));
      dispatch(productActions.clearLoading());
    } catch (error) {
      console.log(error);
      dispatch(productActions.clearLoading());
    }
  };
}
