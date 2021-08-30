import React from "react";
import { Link } from "react-router-dom";
import {
  CssBaseline,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Proyecto.css";
import ProyectoText from "../components/ProyectoText";
import logoPuentes from "../assets/img/puentes-logo-solo.png";
import bgProyecto from "../assets/img/bg/bg-proyecto2.jpg";
import Footer from "../components/blog/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    overflow: "scroll",
    display: "block",
  },
  bgImageCont: {},
  bgImageStyles: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeigth: "300px",
  },
  article: {
    margin: theme.spacing(0, 4),
    display: "block",
  },
  copy: {
    marginTop: "2rem",
    padding: "0.5rem",
  },
  "& ol": {
    marginLeft: "1rem !important",
  },
  logoLinkCont: {
    display: "block",
    position: "relative",
    marginTop: "2rem !important",
  },
  logoLink: {
    width: "50px",
    position: "absolute",
    top: "-5px",
    left: "10px",
  },
}));

const Proyecto = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        component="main"
        className={classes.root}
      >
        <Grid
          item
          xs={12}
          elevation={6}
          style={{
            backgroundColor: "#F8F8F8",
            display: "block",
          }}
        >
          <CssBaseline />
          <div className={classes.article}>
            <div
              maxWidth="lg"
              className={classes.logoLinkCont}
            >
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
                textAlign: "center",
              }}
            >
              El Proyecto
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} style={{ marginTop: "2.5rem" }}>
          <Container
            maxWidth="lg"
            className={classes.bgImageCont}
          >
            <Paper
              className={classes.bgImageStyles}
              style={{
                backgroundImage: `url(${bgProyecto})`,
                minHeight: "450px",
              }}
            >
              <img
                src={bgProyecto}
                alt="El Proyecto"
                style={{ display: "none" }}
              />
            </Paper>
          </Container>
        </Grid>
        <div className={classes.copy}>
          <Container maxWidth="md">
            <Typography
              variant="body1"
              color="textPrimary"
              paragraph={true}
              align="justify"
            >
              <ProyectoText paragraph={true} />
            </Typography>
          </Container>
        </div>
      </Grid>
      <Footer
        title="Puentes"
        description='"mejores oportunidades laborales para los jóvenes, mayor empoderamiento económico de las comunidades vulnerables"'
      ></Footer>
    </>
  );
};

export default Proyecto;
