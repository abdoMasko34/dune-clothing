import React, { Component } from "react";
import "./sign-in.style.scss";
import FormInput from "../../UI/form-input/form-input.component";
import CustomButton from "../../UI/custom-button/custom-button.component";
import { signInWithGoogle } from "../../../firebase/firebase-utili";
class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSignIn = () => {
    signInWithGoogle();
  };
  render() {
    return (
      <div className="sign-in">
        <h1 className="title">I have already account</h1>
        <span>Sign in With your email</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            label="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            label="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
          />
          <div className="actions">
            <CustomButton type="submit">submit</CustomButton>
            <CustomButton
              type="button"
              onClick={this.handleSignIn}
              isGoogleSignIn="true"
            >
              SING IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
