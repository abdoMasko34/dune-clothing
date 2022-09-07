import React from "react";
import "./form-input.style.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input
      type={otherProps.type}
      onChange={handleChange}
      name={otherProps.name}
      className="form-input"
      required
    />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
        htmlFor={otherProps.name}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
