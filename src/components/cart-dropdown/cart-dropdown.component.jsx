import React from "react";
import { connect } from "react-redux";
import "./cart-dropdown.style.scss";

import CustomButton from "../UI/custom-button/custom-button.component";
import CartItem from "./cart-item/cart-item.component";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);
const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems,
});
export default connect(mapStateToProps)(CartDropdown);
