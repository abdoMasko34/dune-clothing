import {
  addItemToCart,
  cleartItemFromCart,
  decreaseItemFromCart,
} from "./cart-utils";
const INTIAL_STATE = {
  hidden: true,
  cartItems: [],
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
    case "CLEAR_ITEM_FROM_CART":
      return {
        ...state,
        cartItems: cleartItemFromCart(state.cartItems, action.payload),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: decreaseItemFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
