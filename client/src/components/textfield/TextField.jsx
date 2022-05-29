import React from "react";
import { ErrorMessage, useField } from "formik";
import "./textfield.css";
import { AccountCircle } from "@material-ui/icons";
export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-2">
      <label style={{ fontWeight: "bold" }} htmlFor={field.name}>
        {label}
      </label>
      <input
        className={`form-control shadow-none${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage name={field.name} component="div" className="error" />
    </div>
  );
};
