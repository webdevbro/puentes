import React from "react";
import { CssBaseline, Grid, Typography, Container } from "@material-ui/core";
import ModeloPuentes from "../assets/img/modelo-puentes.png";
import { makeStyles } from "@material-ui/core/styles";
import "./Modelo.css";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    overflow: "scroll",
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
  article: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  copy: {
    marginTop: "2rem",
    padding: "0.5rem",
  },
  modeloImg: {
    maxWidth: "100%",
    marginTop: "3rem",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Proyecto = () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid
        item
        xs={12}
        elevation={6}
        square
        style={{ backgroundColor: "#F8F8F8" }}
      >
        <div className={classes.article}>
          <Typography
            component="h1"
            variant="h4"
            color="textPrimary"
            style={{
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            El Modelo
          </Typography>
          <div className={classes.copy}>
            <Container maxWidth="sm">
              <Typography
                variant="body1"
                color="textPrimary"
                paragraph="true"
                align="justify"
              >
                PUENTES articula las áreas rurales, periurbanas y rurales,
                generando oportunidades económicas para los actores
                involucrados. El modelo de intervención será sistematizado para
                su socialización, inclusión, réplica y ampliación a diversos
                niveles por parte del FIDA y de otros programas
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
  );
};

export default Proyecto;
