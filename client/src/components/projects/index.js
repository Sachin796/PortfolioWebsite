import React from "react";
function Projects() {
  return (
    <div className="row" id="projectRow">
      <div style={{ backgroundcolor: "aliceblue", height: "auto" }}>
        <h2 className="center">PROJECTS</h2>

        <div className="project1div" id="project">
          <div className="row">
            <div className="col l5 m6 s12" id="project1img">
              <img src="./images/images.jpg" id="projimg" />
            </div>
            <div className="col l5 m6 s12" id="project1desc">
              <h2>hello</h2>
              <h4>hii</h4>
              <h3>Byee</h3>
            </div>
          </div>

          <div className="row">
            <div className="col l5 m6 s12" id="project1img">
              <img src="./images/images.jpg" />
            </div>
            <div className="col l5 m6 s12" id="project1desc">
              <h2>hello</h2>
              <h4>hii</h4>
              <h3>Byee</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
