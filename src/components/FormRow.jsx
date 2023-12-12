import React from "react";

const FormRow = ({ type, name, defaultValue, labelText }) => {
  return (
    <>
      <div className="form-row">
        <label htmlFor={name} className="form-label">
          {labelText || name}
        </label>
        <input
          className="form-input"
          id={name}
          name={name}
          required
          type={type}
          defaultValue={defaultValue || " "}
        />
      </div>
    </>
  );
};

export default FormRow;
