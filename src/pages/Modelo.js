import React from "react";
import { CssBaseline, Grid, Typography } from "@material-ui/core";
import ModeloPuentes from "../assets/img/modelo-puentes.png";
import { makeStyles } from "@material-ui/core/styles";
import "./Modelo.css";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
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
      <Grid item xs={false} sm={4} md={5} className="halfimage" />
      <Grid
        item
        xs={12}
        sm={8}
        md={7}
        elevation={6}
        square
        style={{ backgroundColor: "#1D5E32" }}
      >
        <div className={classes.article}>
          <Typography
            component="h1"
            variant="h4"
            style={{
              color: "#fafafa",
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            El Modelo
          </Typography>
          <div className={classes.copy}>
            <Typography
              paragraph="true"
              style={{ color: "#fafafa" }}
              align="justify"
            >
              PUENTES articula las áreas rurales, periurbanas y rurales,
              generando oportunidades económicas para los actores involucrados.
              El modelo de intervención será sistematizado para su
              socialización, inclusión, réplica y ampliación a diversos niveles
              por parte del FIDA y de otros programas
            </Typography>
            <div>
              <img
                src={ModeloPuentes}
                alt="Modelo - Puentes"
                className={classes.modeloImg}
              />
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Proyecto;
