import React from "react";
import CartIcon from "../cart-icon/cart-icon.component";
import "./header.style.scss";
import { NavLink, Link } from "react-router-dom";
import { auth } from "../../firebase/firebase-utili";
import { connect } from "react-redux";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import Logo from "../../imgs/logo.svg";
const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <img src={Logo} alt="logo" />
    </Link>
    <div className="options">
      <NavLink
        to="/contact"
        className="option"
        activeClassName="active-navLink"
      >
        CONTACT
      </NavLink>
      <NavLink to="/shop" className="option" activeClassName="active">
        SHOP
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

const mapStateToProps = ({ user, cart }) => ({
  currentUser: user.currentUser,
  hidden: cart.hidden,
});

export default connect(mapStateToProps)(Header);
