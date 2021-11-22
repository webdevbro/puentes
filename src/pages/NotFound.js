import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Container, Typography } from "@material-ui/core";
import logoPuentes from "../assets/img/puentes-logo-solo.png";

const useStyles = makeStyles((theme) => {
  return {
    notFoundCont: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    varianth5: {
      marginTop: "2rem",
    },
    links: {
      marginTop: "2rem",
      "& li": {
        marginBottom: "0.75rem",
      },
      "& a": {
        color: "#212121",
        textDecoration: "underline",
        fontSize: "1.2rem",
      },
    },
  };
});

const NotFound = () => {
  const classes = useStyles();
  return (
    <Container
      className={classes.notFoundCont}
      maxWidth="md"
    >
      <div className="logoLinkCont">
        <Link to="/">
          <img
            className="logoLink"
            src={logoPuentes}
            alt="Logo Puentes"
          />
        </Link>
      </div>
      <Typography variant="h1">Lo sentimos</Typography>
      <Typography variant="h2">
        Esta página no existe en el sitio.
      </Typography>
      <Typography
        variant="h5"
        className={classes.varianth5}
      >
        Por favor retorne al Inicio o visite nuestro Blog de
        Noticias:
      </Typography>
      <ul className={classes.links}>
        <li>
          <Link to="/">Puentes</Link>
        </li>
        <li>
          <Link to="/noticias">Noticias</Link>
        </li>
      </ul>
    </Container>
  );
};

export default NotFound;
