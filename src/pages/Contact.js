import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import logoPuentes from "../assets/img/puentes-logo-solo.png";
import {
  CssBaseline,
  Grid,
  Typography,
  Container,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../components/blog/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "scroll",
    height: "calc(100vh - 150px)",
  },
  article: {
    margin: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  pageContent: {
    margin: theme.spacing(4),
    marginTop: "2rem",
    marginBottom: "2rem",
    padding: theme.spacing(3),
  },
  logoLink: {
    width: "50px",
    position: "absolute",
    top: "-0.5rem",
    left: "10px",
  },
}));

const Contacto = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        component="main"
        className={classes.root}
        maxWidth="md"
      >
        <CssBaseline />
        <Grid
          item
          xs={12}
          elevation={6}
          style={{ backgroundColor: "#F8F8F8" }}
        >
          <Container maxWidth="lg">
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
                }}
              >
                Formulario de Contacto
              </Typography>

              <div className={classes.copy}>
                <Container maxWidth="sm">
                  <Paper className={classes.pageContent}>
                    <ContactForm />
                  </Paper>

                  <Typography
                    variant="body1"
                    color="textPrimary"
                    paragraph={true}
                    align="justify"
                  >
                    Utiliza el formulario de contacto para
                    solicitar más información sobre el
                    proyecto Puentes y las oportunidades que
                    brindamos a jóvenes.
                  </Typography>
                </Container>
              </div>
            </div>
          </Container>
        </Grid>
      </Grid>
      <Footer
        title="Puentes"
        description='"mejores oportunidades laborales para los jóvenes, mayor empoderamiento económico de las comunidades vulnerables"'
      ></Footer>
    </>
  );
};

export default Contacto;
