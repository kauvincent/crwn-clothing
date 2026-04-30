import { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { setCurrentUser } from "./components/redux/user/user.action";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./components/redux/user/user.selector";

import "./App.css";

import {
  auth,
  createUserProfileDocument
} from "./components/firebase/firebase.utils";

import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";

class App extends Component {
  unsubscribeFromAuth = null;
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = onAuthStateChanged(auth, async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        this.unsubscribeFromSnapshot = onSnapshot(userRef, snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribeFromAuth) {
      this.unsubscribeFromAuth();
    }

    if (this.unsubscribeFromSnapshot) {
      this.unsubscribeFromSnapshot();
    }
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop/*" element={<ShopPage />} />
          <Route exact path="/checkout" element={<CheckoutPage />} />
          <Route
            path="/signin"
            element={
              currentUser ? (
                <Navigate to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
