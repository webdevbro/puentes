import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useForm = (initialFValues) => {
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState({});
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const resetForm = () => {
    setValues(initialFValues);
    setErrors({});
  };
  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  };
};

const useStyles = makeStyles((theme) => {
  return {
    root: {},
    textField: {
      margin: theme.spacing(1),
    },
    formButtonsCont: {
      margin: "0px",
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "2rem",
    },
    formButtons: {
      padding: "11px 22px 5px",
    },
  };
});

const Form = (props) => {
  const classes = useStyles();
  const { children, ...other } = props;
  return (
    <form
      className={classes.root}
      autoComplete="off"
      {...other}
    >
      {props.children}
    </form>
  );
};

export { useForm, Form };
