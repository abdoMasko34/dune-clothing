import React, { Component } from "react";
import Header from "./components/header/header.component";
import HomePage from "./components/homePage/homePage.components";
import ShopPage from "./components/shop/shop-page.component";
// import HatsPage from "./components/hatsPage/hatsPage.component";
// import SneakersPage from "./components/sneakers/sneakers.component";
// import JacketsPage from "./components/jackets/jackets.component";
// import ManPage from "./components/man/man.component";
// import WomenPage from "./components/women/women.component";
import Auth from "./components/auth/auth.component";

import { auth, createUserProfileDocument } from "./firebase/firebase-utili";

import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
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
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* <Route path="/hats" element={<HatsPage />} />
          <Route path="/sneakers" element={<SneakersPage />} />
          <Route path="/jackets" element={<JacketsPage />} />
          <Route path="/man" element={<ManPage />} />
          <Route path="/women" element={<WomenPage />} /> */}
          <Route path="/shop" element={<ShopPage />} />
          <Route
            path="/auth"
            element={
              this.props.currentUser ? <Navigate replace to="/" /> : <Auth />
            }
          />
        </Routes>
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
