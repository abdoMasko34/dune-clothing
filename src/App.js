import React, { useEffect } from "react";
import Header from "./components/header/header.component";
import HomePage from "./components/homePage/homePage.components";
import ShopPage from "./components/shop/shop-page.component";
import CheckoutPage from "./components/checkout-page/checkout-page.component";
import Auth from "./components/auth/auth.component";

import { selectCurrentUser } from "./redux/user/user-selector";

import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user-actions";

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/checkout">
          <CheckoutPage />
        </Route>
        <Route exact path="/auth">
          {currentUser ? <Redirect to="/" /> : <Auth />}
        </Route>
        to: string
      </Switch>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
