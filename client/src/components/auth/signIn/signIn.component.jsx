import React, { useState } from "react";
import { connect } from "react-redux";
import "./sign-in.style.scss";
import FormInput from "../../UI/form-input/form-input.component";
import CustomButton from "../../UI/custom-button/custom-button.component";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../../redux/user/user-actions";
const SignIn = ({ emailSignInStart, googleSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignInStart(email, password);
  };
  return (
    <div className="sign-in">
      <h1 className="title">I have already account</h1>
      <span>Sign in With your email</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          label="email"
          type="email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          name="password"
          label="password"
          type="password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
        <div className="actions">
          <CustomButton type="submit">submit</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignIn}
            isGoogleSignIn="true"
          >
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  googleSignIn: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(SignIn);
