import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  SAVE_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT
} from "../actions/types";
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return [...state, ...action.payload];
    case FETCH_PRODUCT:
    case SAVE_PRODUCT:
    case EDIT_PRODUCT:
    case DELETE_PRODUCT:
      return state;
    default:
      return state;
  }
};
