import React from "react";
import { CssBaseline, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Proyecto.css";

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
            <Typography
              paragraph="true"
              style={{ color: "#fafafa" }}
              align="justify"
            >
              ICCO América Latina, con apoyo del Fondo Internacional de
              Desarrollo Agrícola (FIDA) implementará durante los próximos 3
              años un proyecto por 2,3 millones de euros que conectará zonas
              rurales con urbanas a través de una intervención innovadora que
              generará empleo, emprendimiento y alimentación saludable para
              jóvenes, mujeres y campesinos.
            </Typography>
            <Typography
              paragraph="true"
              style={{ color: "#fafafa" }}
              align="justify"
            >
              En los países donde se implementará el proyecto (Bolivia, Colombia
              y Honduras), la juventud rural se enfrenta a la exclusión y la
              desigualdad en el ámbito social y económico (desempleo, acceso
              limitado a la educación y formación técnica y profesional), así
              como a graves problemas nutricionales.
            </Typography>
            <Typography
              paragraph="true"
              style={{ color: "#fafafa" }}
              align="justify"
            >
              El proyecto busca minimizar la brecha histórica y al mismo tiempo
              permitir mejoras en la calidad de vida de hombres y mujeres
              campesinas, apoyando el emprendimiento y el rol de los jóvenes
              como dinamizadores de las cadenas de valor agroalimentarias tanto
              en origen como en destino, creando mejores y más formas de
              producción más eficientes, fomentando el consumo saludable y la
              sensibilización, y aprovechando las potencialidades del
              agroturismo.
            </Typography>
            <Typography
              paragraph="true"
              style={{ color: "#fafafa" }}
              align="justify"
            >
              El proyecto también promueve la creación de empleo juvenil y la
              mejora de los niveles de nutrición de este grupo social y sus
              entornos fortaleciendo los vínculos urbano-rurales con los
              sectores de la gastronomía y la hostelería.
            </Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Proyecto;
