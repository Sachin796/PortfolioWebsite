import React from "react";
function Projects() {
  return (
    <div className="row" id="projectRow">
      <div style={{ backgroundcolor: "aliceblue", height: "auto" }}>
        <h3 className="center">PROJECTS</h3>

        <div className="project1div" id="project">
          <div className="row">
            <div className="col l5 m6 s12 center">
              <img
                src="images/worktopiaproject.jpg"
                height="250px"
                width="370px"
              />
            </div>
            <div className="col l5 m6 s12" id="project1desc">
              <div className="center">WORKTOPIA</div>
              <h5>
                &ldquo; An application where users can either post office spaces
                for rent or search for work spaces to rent. &rdquo;
              </h5>

              {/* Create component of the buttons */}
              <div className="center">
                <button
                  style={{
                    height: "auto",
                    width: "130px",
                    backgroundColor: "blue",
                    borderRadius: "35px",
                    alignContent: "center",
                    marginRight: "30px",
                    border: "none"
                  }}
                >
                  {/* <img src="images/github.jpg" height="30px"></img>Github */}
                  <a href="#" className="fa fa-github"></a> Github
                </button>
                <button
                  style={{
                    height: "auto",
                    width: "130px",

                    borderRadius: "35px",
                    alignContent: "center",
                    padding: "0px",
                    border: "none"
                  }}
                >
                  <a href="#" className="fa fa-globe"></a>DEMO
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col l5 m6 s12 center" id="project1img">
              <img
                src="images/financrproject.png"
                height="250px"
                width="400px"
              />
            </div>
            <div className="col l5 m6 s12" id="project1desc">
              <div className="center">FINANCR</div>
              <h5>
                &ldquo; Financr is an app that caters to the needs of the
                financially savy and allows them to make well informed decisions
                about their purchases &rdquo;
              </h5>
              <div className="center">
                <button
                  style={{
                    height: "auto",
                    width: "130px",
                    backgroundColor: "blue",
                    borderRadius: "35px",
                    alignContent: "center",
                    marginRight: "30px",
                    border: "none"
                  }}
                >
                  {/* <img src="images/github.jpg" height="30px"></img>Github */}
                  <a href="#" className="fa fa-github"></a> Github
                </button>
                <button
                  style={{
                    height: "auto",
                    width: "130px",

                    borderRadius: "35px",
                    alignContent: "center",
                    padding: "0px",
                    border: "none"
                  }}
                >
                  <a href="#" className="fa fa-globe"></a>DEMO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
