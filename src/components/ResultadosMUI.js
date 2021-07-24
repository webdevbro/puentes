import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: "0px 50px",
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Resultados = () => {
  const classes = useStyles();

  const FormRow = () => {
    return (
      <>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className="{classes.paper}">item 1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className="{classes.paper}">item 2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className="{classes.paper}">item 3</Paper>
        </Grid>
      </>
    );
  };

  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid container spacing={3}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Resultados;
