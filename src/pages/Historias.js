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
            {/* HISTORIA 1 */}
            <div
              className="section section10"
              style={{ backgroundColor: "#000000" }}
            >
              <div className="historiaCont">
                <OpenDialog
                  embedId="Tj9ZY-4QmxI?rel=0"
                  title="Javier Calcina - Jóven Rural Boliviano"
                  desc="Revaloriza la producción local y ancestral. Promueve una alimentación saludable y es gestor de emprendimientos"
                />
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

            {/* HISTORIA 2*/}
            <div
              className="section section11"
              style={{ backgroundColor: "#000000" }}
            >
              <div className="historiaCont">
                <OpenDialog
                  embedId="tvu-ThgY_oQ?rel=0"
                  title="Jóvenes emprendedoras rurales colombianas"
                  desc="BAR C.O.T es una iniciativa rural resultado de un proceso de formación en gastronomía y emprendedurismo, liderado por mujeres jóvenes que revalorizan sus productos y creen en su tierra"
                />
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

            {/* HISTORIA 3*/}
            <div
              className="section section12"
              style={{ backgroundColor: "#000000" }}
            >
              <div className="historiaCont">
                <OpenDialog
                  embedId="9CSewgE4VVU?rel=0"
                  title="Jóvenes emprendedores gastronómicos"
                  desc="Miska es un modelo de formación gastronómica y empleo juvenil que ofrece mejores oportunidades de vida a jóvenes centroamericanos"
                />
                <div className="navIconContainer">
                  {/* <Fab
                    variant="extended"
                    style={{ backgroundColor: "#c8e6c998" }}
                    onClick={() => fullpageApi.moveSectionDown()}
                  >
                    <ImportExportIcon className="navIcon" />
                  </Fab> */}
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
