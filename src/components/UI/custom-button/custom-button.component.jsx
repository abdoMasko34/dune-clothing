import React from "react";
import { CustomButtonContainer } from "./custom-button.style";

const CustomButton = (props) => (
  <CustomButtonContainer className={`custom-button`} {...props}>
    {props.children}
  </CustomButtonContainer>
);

export default CustomButton;
