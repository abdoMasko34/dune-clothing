import React from "react";
import CartIcon from "../cart-icon/cart-icon.component";
import {
  HeaderContainer,
  LogoContainer,
  OptionsLink,
  OptionLink,
  OptionDiv,
} from "./header.style";

import { auth } from "../../firebase/firebase-utili";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { selectCartHidden } from "../../redux/cart/cart-selector";
import { createStructuredSelector } from "reselect";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import Logo from "../../imgs/logo.svg";
const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/" className="logo-container">
      <img src={Logo} alt="logo" />
    </LogoContainer>
    <OptionsLink>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
      ) : (
        <OptionLink to="/auth">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsLink>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
