import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { green, purple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "transparent",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
    backgroundColor: "rgba(1, 123, 55, 0.8)",
    color: "#FFFFFF",
  },
  cardFooter: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    justifyContent: "center",
  },
  cta: {
    backgroundColor: { green },
  },
}));

const cards = [
  {
    id: 1,
    title:
      "Conectando mejores oportunidades socio económicas para jóvenes rurales y periurbanos en Bolivia, Colombia y Honduras",
    image:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    excerpt:
      "ICCO América Latina, Manqa, Miga, El Lab, Fundación PT y CASM, con apoyo del Fondo Internacional de Desarrollo Agrícola (FIDA), implementarán durante los próximos 3 años un proyecto por 2,5 millones de dólares...",
  },
  {
    id: 2,
    title:
      "Jóvenes Youtubers  Rurales destacan la riqueza del patrimonio alimentario, la producción local y el turismo en Bolivia",
    image:
      "https://images.unsplash.com/photo-1599907919219-922e2a6949b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    excerpt:
      "Con la intención de visibilizar la riqueza del patrimonio alimentario boliviano desde las miradas, experiencias y capacidades de jóvenes rurales, el ‘concurso/taller Youtubers Rurales’ identificó y formó...",
  },
  {
    id: 3,
    title: "Contexto Proyecto Puentes",
    image:
      "https://images.unsplash.com/photo-1610137120828-7813477d2470?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    excerpt:
      "Según datos del Observatorio Latinoamericano de la Juventud de la CEPAL, el 20% de la población total de América Latina son jóvenes, 31 millones de los cuales viven en zonas rurales, aunque persisten constantes dinámicas...",
  },
];

const NoticiasPreview = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.image}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    style={{
                      lineHeight: "1.1",
                      marginBottom: "1rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography variant="body2">{card.excerpt}</Typography>
                </CardContent>
                <CardActions className={classes.cardFooter}>
                  <Button size="medium">Leer</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default NoticiasPreview;
