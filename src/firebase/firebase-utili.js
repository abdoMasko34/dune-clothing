import firebase from "firebase/compat/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "firebase/compat/firestore";

import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCJcCzvOxa53-c30fiLSLNcMNSaxlscrr4",
  authDomain: "dune-clothing-app.firebaseapp.com",
  projectId: "dune-clothing-app",
  storageBucket: "dune-clothing-app.appspot.com",
  messagingSenderId: "861883231261",
  appId: "1:861883231261:web:ed4993093ceaa19e2baaf4",
  measurementId: "G-FDZC19YHDT",
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // const userRef = db.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error created user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;