import firebase from "firebase/compat/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// import "firebase/firestore";
// import "firebase/auth";

const config = {
  apiKey: "AIzaSyCJcCzvOxa53-c30fiLSLNcMNSaxlscrr4",
  authDomain: "dune-clothing-app.firebaseapp.com",
  projectId: "dune-clothing-app",
  storageBucket: "dune-clothing-app.appspot.com",
  messagingSenderId: "861883231261",
  appId: "1:861883231261:web:ed4993093ceaa19e2baaf4",
  measurementId: "G-FDZC19YHDT",
};
const app = firebase.initializeApp(config);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
// const provider = new firebase.auth.googleAuthProvider();
// provider.setCustomeParameters({ prompt: "select account" });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
