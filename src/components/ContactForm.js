import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useForm, Form } from "../components/useForm";
import InputComp from "./controls/InputComp";
import ButtonComp from "./controls/ButtonComp";

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
    btnStyles: {
      color: "#FFFFFF",
      padding: "11px 20px 5px",
      marginLeft: "1rem",
    },
  };
});

const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  body: "",
};

function ContactForm() {
  const [result, showResult] = useState(false);
  const classes = useStyles();

  const validate = () => {
    let temp = {};
    temp.fullName = values.fullName
      ? ""
      : "Este campo es obligatorio";
    temp.email =
      values.email && /$^|.+@.+..+/.test(values.email)
        ? ""
        : "Incluir un correo electrónico válido";
    temp.body = values.body
      ? ""
      : "Este campo es obligatorio";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => {
      return x === "";
    });
  };

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialFValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      /* EMAILJS FUNCTION */
      emailjs
        .sendForm(
          "service_acspzse",
          "template_hmt024m",
          event.target,
          "user_xrqPhb3zeDAeJqLuE9eLf",
        )
        .then((result) => {
          console.log(result.text);
        })
        .catch((err) => {
          console.log(err.text);
        });
      resetForm();
      showResult(true);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputComp
        autoFocus={true}
        value={values.fullName}
        multiline={false}
        name="fullName"
        label="Full Name"
        onChange={handleInputChange}
        error={errors.fullName}
      />
      <InputComp
        autoFocus={false}
        value={values.email}
        multiline={false}
        name="email"
        label="Correo Electrónico"
        onChange={handleInputChange}
        error={errors.email}
      />
      <InputComp
        autoFocus={false}
        value={values.body}
        multiline={true}
        name="body"
        label="Mensaje"
        onChange={handleInputChange}
        error={errors.body}
      />
      <div className={classes.formButtonsCont}>
        <ButtonComp
          text="Resetear"
          color="default"
          variant="outlined"
          onClick={resetForm}
        />
        <Button
          type="submit"
          color="primary"
          size="large"
          variant="contained"
          className={classes.btnStyles}
          disableElevation
        >
          Enviar Mensaje
        </Button>
      </div>
    </Form>
  );
}

export default ContactForm;
