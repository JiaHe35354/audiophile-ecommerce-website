import { useState } from "react";

import { validateField } from "../../util/validationHelpers";

function InputField({ label, name, type = "text", placeholder, formState }) {
  const [localError, setLocalError] = useState("");

  const normalizeName = (name) => {
    const parts = name.split("-");
    return (
      parts[0] +
      parts
        .slice(1)
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join("")
    );
  };

  const fieldName = normalizeName(name);
  const globalError = formState.errors?.[fieldName];

  const error = localError || globalError;

  const handleChange = (e) => {
    const value = e.target.value;
    const errorMessage = validateField(name, value);
    setLocalError(errorMessage || "");

    if (formState.errors?.[fieldName]) {
      formState.errors[fieldName] = undefined;
    }
  };

  return (
    <>
      <label htmlFor={name} className={`label ${error ? "label-wrong" : ""}`}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        defaultValue={formState.enteredValues?.[fieldName]}
        onChange={handleChange}
        className={`input ${error ? "input-wrong" : ""}`}
      />
      {error && <p className="error-text">{error}</p>}
    </>
  );
}

export default InputField;
