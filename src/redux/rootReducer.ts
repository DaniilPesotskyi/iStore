import { cartReducer } from "./cart/cartSlice";
import { displayModeReducer } from "./displayMode/displayModeSlice";

export const reducer = {
  cart: cartReducer,
  displayMode: displayModeReducer,
};
