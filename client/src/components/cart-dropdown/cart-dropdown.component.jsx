import React from "react";
import { connect } from "react-redux";
import "./cart-dropdown.style.scss";
import { selectCartItem } from "../../redux/cart/cart-selector";
import { createStructuredSelector } from "reselect";
import CustomButton from "../UI/custom-button/custom-button.component";
import CartItem from "./cart-item/cart-item.component";
import { useHistory } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart-actions";

const CartDropdown = ({ cartItems, toggleCartHidden }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/checkout");
    toggleCartHidden();
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">cart is empty</span>
        )}
      </div>
      <CustomButton onClick={handleClick}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
});
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: (hidden) => dispatch(toggleCartHidden(hidden)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
