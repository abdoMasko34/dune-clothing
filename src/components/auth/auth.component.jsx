import React from "react";
import SignIn from "./signIn/signIn.component";
import SignUp from "./signup/signup.component";

const Auth = () => (
  <div className="auth-layout">
    <SignIn />
    <SignUp />
  </div>
);
export default Auth;
