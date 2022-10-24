import React from "react";
import "./cart-item.style.scss";

const CartItem = ({ cartItem: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="img" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} * ${price}
      </span>
    </div>
  </div>
);
export default CartItem;
