import React from "react";
import { Link } from "react-router-dom";
import {
  CssBaseline,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import ModeloPuentes from "../assets/img/modelo-puentes.png";
import logoPuentes from "../assets/img/puentes-logo-solo.png";
import { makeStyles } from "@material-ui/core/styles";
import "./Modelo.css";
import Footer from "../components/blog/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "scroll",
    height: "calc(100vh - 150px)",
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  contentContainer: {
    margin: "0px auto",
  },
  article: {
    margin: theme.spacing(0, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  copy: {
    marginTop: "2rem",
    padding: "0.5rem",
  },
  modeloImg: {
    width: "100%",
    marginTop: "3rem",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  logoLink: {
    width: "50px",
    position: "absolute",
    top: "20px",
    left: "10px",
  },
}));

const Modelo = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        component="main"
        className={classes.root}
      >
        <CssBaseline />
        <Grid
          item
          xs={12}
          elevation={6}
          style={{
            backgroundColor: "#F8F8F8",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className={classes.article}>
            <div className="classes.logoLinkCont">
              <Link to="/">
                <img
                  className={classes.logoLink}
                  src={logoPuentes}
                  alt="Logo Puentes"
                />
              </Link>
            </div>
            <Typography
              component="h1"
              variant="h4"
              color="textPrimary"
              style={{
                fontWeight: "600",
                textTransform: "uppercase",
                marginTop: "2rem",
              }}
            >
              El Modelo
            </Typography>
            <div className={classes.copy}>
              <Container maxWidth="sm">
                <Typography
                  variant="body1"
                  color="textPrimary"
                  paragraph={true}
                  align="justify"
                >
                  PUENTES articula las áreas rurales,
                  periurbanas y rurales, generando
                  oportunidades económicas para los actores
                  involucrados. El modelo de intervención
                  será sistematizado para su socialización,
                  inclusión, réplica y ampliación a diversos
                  niveles por parte del FIDA y de otros
                  programas
                </Typography>
              </Container>
              <Container maxWidth="md">
                <img
                  src={ModeloPuentes}
                  alt="Modelo - Puentes"
                  className={classes.modeloImg}
                />
              </Container>
            </div>
          </div>
        </Grid>
      </Grid>
      <Footer
        title="Puentes"
        description='"mejores oportunidades laborales para los jóvenes, mayor empoderamiento económico de las comunidades vulnerables"'
      ></Footer>
    </>
  );
};

export default Modelo;
