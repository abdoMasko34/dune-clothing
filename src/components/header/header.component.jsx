import React from "react";
import "./header.style.scss";
import { NavLink, Link } from "react-router-dom";
import { auth } from "../../firebase/firebase-utili";
import Logo from "../../imgs/logo.svg";
const Header = ({ currentUser }) => (
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
    </div>
  </div>
);

export default Header;
