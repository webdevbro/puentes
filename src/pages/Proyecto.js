import React from "react";
import { CssBaseline, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Proyecto.css";
import ProyectoText from "../components/ProyectoText";

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
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Proyecto = () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className="halfimage-proyecto" />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        elevation={6}
        square
        style={{ backgroundColor: "#AC5857" }}
      >
        <div className={classes.article}>
          <Typography
            color="primary"
            component="h1"
            variant="h4"
            style={{
              color: "#fafafa",
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            El Proyecto
          </Typography>
          <div className={classes.copy}>
            <Typography className="copy">
              <ProyectoText paragraph="true" />
            </Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Proyecto;
