import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import TopMenu from "../components/TopMenu";
import { Button, IconButton } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import PuentesVideo1 from "../assets/img/vids/puentes1.mp4";
import PuentesVideo2 from "../assets/img/vids/puentes2.mp4";
import PuentesLogo from "../assets/img/puentes-logo-white.png";
import "./Fullpage.css";

const Fullpage = () => (
  <>
    <TopMenu />
    <ReactFullpage
      licenseKey={"662DA074-56CD44A6-A50366EF-4573C480"}
      scrollingSpeed={700}
      navigation={true}
      css3={false}
      anchors={["firstPage", "secondPage", "thirdPage", "fourthPage"]}
      menu={"#menu"}
      dragAndMove={true}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div
              className="section section1"
              style={{ backgroundColor: "#000000" }}
            >
              <div className="logoIntroCont">
                <div className="logoIntro">
                  <img
                    src={PuentesLogo}
                    alt="Puentes - Conectando Oportunidades para Jóvenes"
                  />
                </div>
                {/* <Button
                  variant="contained"
                  color="success"
                  onClick={() => fullpageApi.moveSectionDown()}
                >
                  Go down!
                </Button> */}
                <IconButton
                  aria-label="go down!"
                  onClick={() => fullpageApi.moveSectionDown()}
                >
                  <ArrowDownwardIcon
                    style={{ color: "#FFFFFF", fontSize: "3rem" }}
                  />
                </IconButton>
              </div>
            </div>

            {/* SECTION 2 - VIDEO */}
            <div className="section" id="section2">
              <video
                data-autoPlay
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
                <source src={PuentesVideo2} type="video/mp4" />
                {/* <source
              src="./assets/images/bgpics/flowers.webm"
              type="video/webm"
            /> */}
              </video>
              <div className="layer">
                <h1>fullPage.js videos</h1>
              </div>
            </div>

            <div
              className="section section3"
              style={{ backgroundColor: "#000000" }}
            >
              <h3>Third section</h3>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Go down!
              </button>
            </div>
            <div
              className="section section4"
              style={{ backgroundColor: "#000000" }}
            >
              <h3>Fourth section</h3>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Go down!
              </button>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </>
);

export default Fullpage;
