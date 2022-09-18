import React from "react";

import { ReactComponent as ShoppingIcon } from "../../imgs/shopping-icon.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import "./cart-item.style.scss";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: (hidden) => dispatch(toggleCartHidden(hidden)),
});
// const mapStateToProps = (state) => ({
//   hidden: state.cart.hidden,
// });
export default connect(null, mapDispatchToProps)(CartIcon);
