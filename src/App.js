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

import { Routes, Route } from "react-router-dom";
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {
              console.log("current user", this.state);
            }
          );
          console.log(this.state);
        });

        this.setState({ currentUser: userAuth });
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* <Route path="/hats" element={<HatsPage />} />
          <Route path="/sneakers" element={<SneakersPage />} />
          <Route path="/jackets" element={<JacketsPage />} />
          <Route path="/man" element={<ManPage />} />
          <Route path="/women" element={<WomenPage />} /> */}
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    );
  }
}

export default App;
