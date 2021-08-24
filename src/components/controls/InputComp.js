import React from "react";
import { TextField } from "@material-ui/core";

const InputComp = (props) => {
  const {
    autoFocus,
    name,
    label,
    value,
    multiline,
    error = null,
    onChange,
  } = props;

  return (
    <TextField
      autoFocus={autoFocus}
      name={name}
      label={label}
      type="text"
      fullWidth
      multiline={multiline}
      rows={6}
      margin="dense"
      value={value}
      onChange={onChange}
      {...(error && {
        error: true,
        helperText: error,
      })}
    />
  );
};

export default InputComp;
