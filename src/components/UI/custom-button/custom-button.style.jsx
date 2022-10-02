import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;
`;

const invertedButtonStyle = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: #fff;
    border: none;
  }
`;
const googleSignUpStyle = css`
  background-color: #4285f4;
  color: #fff;
  border: 1px solid #4285f4;
  &:hover {
    background-color: #357ae8;
    color: #fff;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignUpStyle;
  }
  return props.inverted ? invertedButtonStyle : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans";
  font-weight: bolder;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  ${getButtonStyles}
`;
