import React from "react";

import { ReactComponent as ShoppingIcon } from "../../imgs/shopping-icon.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { selectCartItemCount } from "../../redux/cart/cart-selector";
import { createStructuredSelector } from "reselect";
import "./cart-item.style.scss";

const CartIcon = ({ itemCount, toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: (hidden) => dispatch(toggleCartHidden(hidden)),
});
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
