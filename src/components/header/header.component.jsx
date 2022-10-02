import React from "react";
import CartIcon from "../cart-icon/cart-icon.component";
import "./header.style.scss";
import { NavLink, Link } from "react-router-dom";
import { auth } from "../../firebase/firebase-utili";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { selectCartHidden } from "../../redux/cart/cart-selector";
import { createStructuredSelector } from "reselect";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import Logo from "../../imgs/logo.svg";
const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <img src={Logo} alt="logo" />
    </Link>
    <div className="options">
      <NavLink to="/shop" className="option">
        SHOP
      </NavLink>
      <NavLink to="/contact" className="option">
        CONTACT
      </NavLink>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/auth">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
