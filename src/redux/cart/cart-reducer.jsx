import { addItemToCart } from "./cart-utils";
const INTIAL_STATE = {
  hidden: true,
  cartItems: [],
  totalNum: 0,
};
const cartReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden,
      };

    case "ADD_ITEM":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
