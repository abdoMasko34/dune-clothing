import cartActionTypes from "./cart-types";
export const toggleCartHidden = (hidden) => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
  payload: hidden,
});

export const addItem = (cart) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: cart,
});

export const clearItem = (cartId) => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: cartId,
});

export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});
export const clearCart = () => ({
  type: cartActionTypes.CLEAR_CART,
});
