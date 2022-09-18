export const toggleCartHidden = (hidden) => ({
  type: "TOGGLE_CART_HIDDEN",
  payload: hidden,
});

export const addItem = (cart) => ({
  type: "ADD_ITEM",
  payload: cart,
});
