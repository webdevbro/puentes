import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      padding: "11px 22px 5px",
      marginLeft: "0.5rem",
    },
    label: {},
    contained: {
      backgroundColor: "#0d47a1",
      "&:hover": {
        backgroundColor: "#1565c0",
      },
    },
  };
});

const ButtonComp = (props) => {
  const { text, size, color, variant, onClick, ...other } =
    props;
  const classes = useStyles();
  return (
    <Button
      size={size}
      color={color}
      variant={variant}
      disableElevation
      onClick={onClick}
      {...other}
      classes={{
        root: classes.root,
        label: classes.label,
        contained: classes.contained,
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonComp;
