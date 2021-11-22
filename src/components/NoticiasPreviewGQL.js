import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery, gql } from "@apollo/client";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./NoticiasPreview.css";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingRight: theme.spacing(2),
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

/* GRAPHQL QUERY */
const ARTICLESPREV = gql`
  query GetArticlesPrev {
    articles(limit: 3) {
      id
      title
      createdDate
      excerpt
      featimage {
        url
      }
    }
  }
`;

const NoticiasPreview = () => {
  const classes = useStyles();
  /* query data */
  const { loading, error, data } = useQuery(ARTICLESPREV);

  if (loading)
    return (
      <div className={classes.root}>
        <CircularProgress color="inherit" />
      </div>
    );
  if (error) return <p>Error :(!!!</p>;

  return (
    <div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {data.articles.map((article) => (
            <Grid
              item
              key={article.id}
              sm={6}
              md={4}
              lg={4}
            >
              <Card className="card">
                <CardMedia
                  className="cardMedia"
                  image={article.featimage.url}
                  title={article.title}
                />
                <CardContent className="cardContent">
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
                    {article.title}
                  </Typography>
                  <Typography variant="body2">
                    {article.createdDate}
                  </Typography>
                  <Typography variant="body2">
                    {article.excerpt}
                  </Typography>
                </CardContent>
                <CardActions className="cardFooter">
                  <Link to={`/noticia/${article.id}`}>
                    <Button size="medium">Leer</Button>
                  </Link>
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
