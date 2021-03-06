import React from "react";
import { Link } from "react-router-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import TopMenu from "../components/TopMenu";
import Resultados from "../components/Resultados";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import PuentesVideo from "../assets/img/bg/bg-puentes.mp4";
import HistoriasVideo from "../assets/img/bg/bg-historias.mp4";
import ResultadosVideo from "../assets/img/bg/bg-resultados.mp4";
import PuentesLogo from "../assets/img/puentes-logo-white.png";
import HistoriasLogo from "../assets/img/png/historias.png";
import ModeloLogo from "../assets/img/png/modelo.png";
import NoticiasLogo from "../assets/img/png/noticias.png";
import ProyectoLogo from "../assets/img/png/proyecto.png";
import ResultadosLogo from "../assets/img/png/resultados.png";
import NoticiasPreview from "../components/NoticiasPreview";
import "./Fullpage.css";

const Fullpage = () => (
  <>
    <TopMenu />
    <ReactFullpage
      licenseKey={"662DA074-56CD44A6-A50366EF-4573C480"}
      scrollingSpeed={700}
      navigation={true}
      css3={false}
      anchors={[
        "firstPage",
        "secondPage",
        "thirdPage",
        "fourthPage",
        "fifthPage",
        "sixthPage",
      ]}
      menu={"#menu"}
      dragAndMove={true}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {/* SECTION 1 - HOME (VIDEO) */}
            <div className="section" id="section1">
              <video
                data-autoplay
                playsInline
                id="myVideo"
                loop
                muted
                style={{
                  position: "absolute",
                  width: "100%",
                  left: "0px",
                  top: "0px",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: "-1",
                }}
              >
                <source
                  src={PuentesVideo}
                  type="video/mp4"
                />
                {/* <source
              src="./assets/images/bgpics/flowers.webm"
              type="video/webm"
            /> */}
              </video>
              <div className="logoIntroCont">
                <div className="logoIntro">
                  <img
                    src={PuentesLogo}
                    alt="Puentes - Conectando Oportunidades para J??venes"
                  />
                </div>
                <div className="navIconContainer">
                  <Fab
                    variant="extended"
                    style={{
                      backgroundColor: "#c8e6c998",
                    }}
                    onClick={() =>
                      fullpageApi.moveSectionDown()
                    }
                  >
                    <ImportExportIcon className="navIcon" />
                  </Fab>
                </div>
              </div>
            </div>

            {/* SECTION 2 - EL PROYECTO */}
            <div
              className="section section2"
              style={{ backgroundColor: "#000000" }}
            >
              <div className="logoIntroCont">
                <div className="logoPages">
                  <img
                    src={ProyectoLogo}
                    alt="Puentes - Conectando Oportunidades para J??venes"
                  />
                </div>
                <Link to="/proyecto">
                  <Button
                    variant="contained"
                    size="large"
                    style={{
                      backgroundColor: "#4caf50",
                      color: "#FFFFFF",
                      marginTop: "1rem",
                      padding: "11px 22px 5px",
                    }}
                  >
                    Conoce &nbsp;<strong>m??s</strong>
                  </Button>
                </Link>

                <div className="navIconContainer">
                  <Fab
                    variant="extended"
                    style={{
                      backgroundColor: "#c8e6c998",
                    }}
                    onClick={() =>
                      fullpageApi.moveSectionDown()
                    }
                  >
                    <ImportExportIcon className="navIcon" />
                  </Fab>
                </div>
              </div>
            </div>

            {/* SECTION 3 - HISTORIAS */}
            <div className="section" id="section1">
              <video
                data-autoplay
                playsInline
                id="myVideo"
                loop
                muted
                style={{
                  position: "absolute",
                  width: "100%",
                  left: "0px",
                  top: "0px",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: "-1",
                }}
              >
                <source
                  src={HistoriasVideo}
                  type="video/mp4"
                />
                {/* <source
              src="./assets/images/bgpics/flowers.webm"
              type="video/webm"
            /> */}
              </video>
              <div className="logoIntroCont">
                <div className="logoIntro">
                  <img
                    src={HistoriasLogo}
                    alt="Puentes - Conectando Oportunidades para J??venes"
                  />
                </div>
                <Link to="/historias">
                  <Button
                    variant="contained"
                    size="large"
                    style={{
                      backgroundColor: "#4caf50",
                      color: "#FFFFFF",
                      marginTop: "1rem",
                      padding: "11px 22px 5px",
                    }}
                  >
                    Conoce &nbsp;<strong>m??s</strong>
                  </Button>
                </Link>
                <div className="navIconContainer">
                  <Fab
                    variant="extended"
                    style={{
                      backgroundColor: "#c8e6c998",
                    }}
                    onClick={() =>
                      fullpageApi.moveSectionDown()
                    }
                  >
                    <ImportExportIcon className="navIcon" />
                  </Fab>
                </div>
              </div>
            </div>

            {/* SECTION 4 - MODELO */}
            <div
              className="section section4"
              style={{ backgroundColor: "#000000" }}
            >
              <div className="logoIntroCont">
                <div className="logoPages">
                  <img
                    src={ModeloLogo}
                    alt="Puentes - Conectando Oportunidades para J??venes"
                  />
                </div>
                <Link to="/modelo">
                  <Button
                    variant="contained"
                    size="large"
                    style={{
                      backgroundColor: "#4caf50",
                      color: "#FFFFFF",
                      marginTop: "1rem",
                      padding: "11px 22px 5px",
                    }}
                  >
                    Conoce &nbsp;<strong>m??s</strong>
                  </Button>
                </Link>

                <div className="navIconContainer">
                  <Fab
                    variant="extended"
                    style={{
                      backgroundColor: "#c8e6c998",
                    }}
                    onClick={() =>
                      fullpageApi.moveSectionDown()
                    }
                  >
                    <ImportExportIcon className="navIcon" />
                  </Fab>
                </div>
              </div>
            </div>

            {/* SECTION 5 - RESULTADOS */}
            <div className="section" id="section1">
              <video
                data-autoplay
                playsInline
                id="myVideo"
                loop
                muted
                style={{
                  position: "absolute",
                  width: "100%",
                  left: "0px",
                  top: "0px",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: "-1",
                }}
              >
                <source
                  src={ResultadosVideo}
                  type="video/mp4"
                />
                {/* <source
              src="./assets/images/bgpics/flowers.webm"
              type="video/webm"
            /> */}
              </video>
              <div className="logoIntroCont">
                <div className="logoIntro resultadosLogoIntro">
                  <img
                    style={{ maxWidth: "250px" }}
                    src={ResultadosLogo}
                    alt="Puentes - Conectando Oportunidades para J??venes"
                    className="imgLogoResultados"
                  />
                </div>
                <Typography
                  variant="h4"
                  className="onlyTitle"
                  style={{ lineHeight: "1" }}
                >
                  Resultados
                </Typography>
                <Resultados />
                {/* <Link to="/proyecto">
                  <Button
                    variant="contained"
                    size="large"
                    style={{
                      backgroundColor: "#4caf50",
                      color: "#FFFFFF",
                      marginTop: "1rem",
                      padding: "11px 22px 5px",
                    }}
                  >
                    Conoce &nbsp;<strong>m??s</strong>
                  </Button>
                </Link> */}
                {/* <div className="navIconContainer">
                  <Fab
                    variant="extended"
                    style={{ backgroundColor: "#c8e6c998" }}
                    onClick={() => fullpageApi.moveSectionDown()}
                  >
                    <ImportExportIcon className="navIcon" />
                  </Fab>
                </div> */}
              </div>
            </div>

            {/* SECTION 6 - NOTICIAS */}

            <div
              className="section section6"
              style={{ backgroundColor: "#000000" }}
            >
              <div className="logoIntroCont">
                <div className="logoPages noticiasLogo">
                  <img
                    src={NoticiasLogo}
                    alt="Puentes - Conectando Oportunidades para J??venes"
                  />
                </div>
                <Link to="/noticias">
                  <Button
                    variant="contained"
                    size="large"
                    style={{
                      backgroundColor: "#4caf50",
                      color: "#FFFFFF",
                      marginTop: "1rem",
                      padding: "11px 22px 5px",
                    }}
                  >
                    Blog de &nbsp;
                    <strong>noticias</strong>
                  </Button>
                </Link>
                <Typography
                  variant="h4"
                  className="onlyTitleNoticias"
                  style={{ lineHeight: "1" }}
                >
                  Noticias
                </Typography>
                <NoticiasPreview />
                {/* <div className="navIconContainer">
                  <Fab
                    variant="extended"
                    style={{ backgroundColor: "#c8e6c998" }}
                    onClick={() => fullpageApi.moveSectionDown()}
                  >
                    <NavigationIcon className="navIcon" />
                  </Fab>
                </div> */}
              </div>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </>
);

export default Fullpage;
