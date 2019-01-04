import productsReducer from "../products";
import { FETCH_PRODUCTS } from "../../actions/types";

it("Test actions for FETCH_PRODUCTS", () => {
  const action = {
    type: FETCH_PRODUCTS,
    payload: [{ id: 999 }]
  };
  const newState = productsReducer([], action);
  expect(newState).toEqual([{ id: 999 }]);
});
