import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./spinner.style";

const WithSpinner =
  (WrapppedComponent) =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerContainer>
        <SpinnerOverlay />
      </SpinnerContainer>
    ) : (
      <WrapppedComponent {...otherProps} />
    );
  };

export default WithSpinner;
