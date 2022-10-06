import React, { Component } from "react";
import Header from "./components/header/header.component";
import HomePage from "./components/homePage/homePage.components";
import ShopPage from "./components/shop/shop-page.component";
import CheckoutPage from "./components/checkout-page/checkout-page.component";
import Auth from "./components/auth/auth.component";

import { auth, createUserProfileDocument } from "./firebase/firebase-utili";
import { selectCurrentUser } from "./redux/user/user-selector";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "./redux/user/user-actions";

class App extends Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
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
            {this.props.currentUser ? <Redirect to="/" /> : <Auth />}
          </Route>
          to: string
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
