import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import TopMenu from "../components/TopMenu";
import Flowers from "../assets/img/flowers.mp4";
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
            <div className="section" id="section3">
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
                <source src={Flowers} type="video/mp4" />
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
              className="section section0"
              style={{ backgroundColor: "#000000" }}
            >
              <h3>First section</h3>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Go down!
              </button>
            </div>
            <div
              className="section section1"
              style={{ backgroundColor: "#000000" }}
            >
              <h3>Second section</h3>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Go down!
              </button>
            </div>
            <div
              className="section section2"
              style={{ backgroundColor: "#000000" }}
            >
              <h3>Third section</h3>
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
