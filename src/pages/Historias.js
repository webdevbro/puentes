import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Fab from "@material-ui/core/Fab";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import OpenDialog from "../components/OpenDialog";

import "./Fullpage.css";

const Historias = () => (
  <>
    <ReactFullpage
      licenseKey={"662DA074-56CD44A6-A50366EF-4573C480"}
      scrollingSpeed={700}
      navigation={true}
      css3={false}
      anchors={["historia1", "historia2", "historia3"]}
      menu={"#menu"}
      dragAndMove={true}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {/* SECTION 2 - EL PROYECTO */}
            <div
              className="section section2"
              style={{ backgroundColor: "#000000" }}
            >
              <div className="logoIntroCont">
                <OpenDialog />
                <div className="navIconContainer">
                  <Fab
                    variant="extended"
                    style={{ backgroundColor: "#c8e6c998" }}
                    onClick={() => fullpageApi.moveSectionDown()}
                  >
                    <ImportExportIcon className="navIcon" />
                  </Fab>
                </div>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </>
);

export default Historias;
