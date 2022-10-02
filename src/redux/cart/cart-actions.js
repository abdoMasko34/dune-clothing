export const toggleCartHidden = (hidden) => ({
  type: "TOGGLE_CART_HIDDEN",
  payload: hidden,
});

export const addItem = (cart) => ({
  type: "ADD_ITEM",
  payload: cart,
});

export const clearItem = (cartId) => ({
  type: "CLEAR_ITEM_FROM_CART",
  payload: cartId,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  payload: item,
});
