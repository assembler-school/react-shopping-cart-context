import React from "react";
import TextField from "@material-ui/core/TextField";

function UiInput({
  label = "input-01",
  id = "input-01",
  value = "",
  // name = "",
  // placeholder = "",
  handleChange = () => {},
  handleBlur = () => {},
  handleFlip = () => {},
  errorMessage,
  hasErrorMessage,
  type = "text",
  ...props
}) {
  function handleClick(e) {
    if (e.target.id === "cardCvv") {
      handleFlip(e);
    }
  }
  function onHandleBlur(e) {
    if (e.target.id === "cardCvv") {
      handleFlip(e);
    }
    handleBlur(e);
  }

  return (
    <TextField
      fullWidth
      required
      id={id}
      label={label}
      name={id}
      variant="filled"
      size="small"
      value={value}
      onChange={handleChange}
      onBlur={onHandleBlur}
      onClick={handleClick}
      error={hasErrorMessage && Boolean(errorMessage)}
      helperText={hasErrorMessage && errorMessage}
      type={type}
      {...props}
    />
  );
}

export default UiInput;
