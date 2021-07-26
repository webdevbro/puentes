import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Container, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import icon1 from "../assets/img/icons/icon1.png";
import icon2 from "../assets/img/icons/icon2.png";
import icon3 from "../assets/img/icons/icon3.png";
import icon4 from "../assets/img/icons/icon4.png";
import icon5 from "../assets/img/icons/icon5.png";
import icon6 from "../assets/img/icons/icon6.png";
import icon7 from "../assets/img/icons/icon7.png";
import icon8 from "../assets/img/icons/icon8.png";
import icon9 from "../assets/img/icons/icon9.png";

import "./Resultados.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Resultados = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg" className="container">
      <Grid container spacing={isSmall ? 1 : 6}>
        <Grid item xm={12} sm={6} md={4} style={{ width: "100%" }}>
          <Paper variant="elevation" elevation={5} className="paperStyles">
            <img src={icon1} alt="jóvenes formados" className="iconImg" />
            <div className="content">
              <Typography variant="h3" align="left" className="title">
                0/2230
              </Typography>
              <Typography variant="body1" align="left" className="text">
                Jóvenes formados en gastronomía, hotelería y turismo.
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xm={12} sm={6} md={4} style={{ width: "100%" }}>
          <Paper variant="elevation" elevation={5} className="paperStyles">
            <img src={icon2} alt="jóvenes formados" className="iconImg" />
            <div className="content">
              <Typography variant="h3" align="left" className="title">
                0/1050
              </Typography>
              <Typography variant="body1" align="left" className="text">
                Jóvenes formados en habilidades digitales y dietas
                nutricionales.
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xm={12} sm={6} md={4} style={{ width: "100%" }}>
          <Paper variant="elevation" elevation={5} className="paperStyles">
            <img src={icon3} alt="jóvenes formados" className="iconImg" />
            <div className="content">
              <Typography variant="h3" align="left" className="title">
                0/2230
              </Typography>
              <Typography variant="body1" align="left" className="text">
                Jóvenes capacitados en emprendimiento y gestión empresarial.
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xm={12} sm={6} md={4} style={{ width: "100%" }}>
          <Paper variant="elevation" elevation={5} className="paperStyles">
            <img src={icon4} alt="jóvenes formados" className="iconImg" />
            <div className="content">
              <Typography variant="h3" align="left" className="title">
                0/1520
              </Typography>
              <Typography variant="body1" align="left" className="text">
                Jóvenes conocen y contribuyen a las dietas nutricionales.
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xm={12} sm={6} md={4} style={{ width: "100%" }}>
          <Paper variant="elevation" elevation={5} className="paperStyles">
            <img src={icon5} alt="jóvenes formados" className="iconImg" />
            <div className="content">
              <Typography variant="h3" align="left" className="title">
                0/14
              </Typography>
              <Typography variant="body1" align="left" className="text">
                Escuelas gastronómicas mejoradas y/o implementadas.
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xm={12} sm={6} md={4} style={{ width: "100%" }}>
          <Paper variant="elevation" elevation={5} className="paperStyles">
            <img src={icon6} alt="jóvenes formados" className="iconImg" />
            <div className="content">
              <Typography variant="h3" align="left" className="title">
                0/300
              </Typography>
              <Typography variant="body1" align="left" className="text">
                Jóvenes inician o fortalecen sus negocios gastronómicos o de
                hotelería.
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xm={12} sm={6} md={4} style={{ width: "100%" }}>
          <Paper variant="elevation" elevation={5} className="paperStyles">
            <img src={icon7} alt="jóvenes formados" className="iconImg" />
            <div className="content">
              <Typography variant="h3" align="left" className="title">
                0/446
              </Typography>
              <Typography variant="body1" align="left" className="text">
                Jóvenes insertados en el mercado laboral en condiciones dignas.
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xm={12} sm={6} md={4} style={{ width: "100%" }}>
          <Paper variant="elevation" elevation={8} className="paperStyles">
            <img src={icon8} alt="jóvenes formados" className="iconImg" />
            <div className="content">
              <Typography variant="h3" align="left" className="title">
                0/100
              </Typography>
              <Typography variant="body1" align="left" className="text">
                Jóvenes usan recursos tecnológicos para la incidencia social y
                política.
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xm={12} sm={6} md={4} style={{ width: "100%" }}>
          <Paper variant="elevation" elevation={9} className="paperStyles">
            <img src={icon9} alt="jóvenes formados" className="iconImg" />
            <div className="content">
              <Typography variant="h3" align="left" className="title">
                0/120
              </Typography>
              <Typography
                display="block"
                variant="body1"
                align="left"
                className="text"
              >
                Alianzas público - privadas consolidadas.
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Resultados;
