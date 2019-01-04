import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  SAVE_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT
} from "./types";
import products from "../apis/products";
export const fetchProducts = () => async dispatch => {
  const response = await products.get("/products");
  return dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};
