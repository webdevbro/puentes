import React from "react";
import ContactForm from "../components/ContactForm";
import {
  CssBaseline,
  Grid,
  Typography,
  Container,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    overflow: "scroll",
  },
  article: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  pageContent: {
    margin: theme.spacing(0),
    marginTop: "2rem",
    marginBottom: "2rem",
    padding: theme.spacing(3),
  },
}));

const Contacto = () => {
  const classes = useStyles();

  return (
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
                PUENTES articula las áreas rurales,
                periurbanas y rurales, generando
                oportunidades económicas para los actores
                involucrados. El modelo de intervención será
                sistematizado para su socialización,
                inclusión, réplica y ampliación a diversos
                niveles por parte del FIDA y de otros
                programas
              </Typography>
            </Container>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Contacto;
