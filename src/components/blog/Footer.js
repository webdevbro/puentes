import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Link,
} from "@material-ui/core";

const Copyright = () => {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
    >
      <Link color="inherit" href="https://puentes.info">
        Derechos Reservados
      </Link>{" "}
      &copy;&nbsp;
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => {
  return {
    footer: {
      backgroundColor: theme.palette.background.paper,
      width: "100%",
      /* Height of the footer*/
      height: "120px",
      marginTop: "2rem",
      padding: "1rem 0px 2rem",
    },
  };
});

const Footer = (props) => {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center">
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textPrimary"
          component="p"
        >
          <strong>{description}</strong>
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  decription: PropTypes.string,
  title: PropTypes.string,
};
