import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

function Projects() {
  return (
    <>
      <div className="row" id="projectRow">
        <div style={{ height: "auto" }}>
          <h4 id="justcolor" className="center">
            PROJECTS
          </h4>
          <hr style={{ width: "7%", marginBottom: "55px" }}></hr>

          <div className="project1div" id="project">
            <div
              className="row"
              style={{
                marginBottom: "65px"
              }}
            >
              <div className="col l5 m12 s12 center">
                <img
                  src="images/worktopiaproject.jpg"
                  height="250px"
                  width="370px"
                />
              </div>
              <div className="col l5 m12 s12 center">
                <div className="center">WORKTOPIA</div>
                <h5>
                  &ldquo; An application where users can either post office
                  spaces for rent or search for work spaces to rent. &rdquo;
                </h5>

                <div>
                  <SocialIcon
                    network="github"
                    target="_blank"
                    url="https://github.com/Sachin796/Worktopia"
                    style={{
                      height: 40,
                      width: 40,
                      marginLeft: "40px",
                      marginRight: "10px"
                    }}
                  />
                  GitHub
                  <SocialIcon
                    network="vsco"
                    target="_blank"
                    url="https://frozen-spire-07685.herokuapp.com/"
                    style={{
                      height: 40,
                      width: 40,
                      marginLeft: "40px",
                      marginRight: "10px"
                    }}
                  />
                  Live
                </div>
              </div>
            </div>

            <div
              className="row"
              style={{
                height: "auto"
              }}
            >
              <div className="col l5 m12 s12 center" id="project1img">
                <img
                  src="images/financrproject.png"
                  height="250px"
                  width="400px"
                />
              </div>
              <div className="col l5  m12 s12 center">
                <div className="center ">FINANCR</div>
                <h5>
                  &ldquo; Financr is an app that caters to the needs of the
                  financially savy and allows them to make well informed
                  decisions about their purchases &rdquo;
                </h5>
                <div style={{ marginBottom: "40x" }}>
                  <SocialIcon
                    network="github"
                    target="_blank"
                    url="https://github.com/Sachin796/Project-2"
                    style={{
                      height: 40,
                      width: 40,
                      marginLeft: "40px",
                      marginRight: "10px"
                    }}
                  />
                  GitHub
                  <SocialIcon
                    network="vsco"
                    target="_blank"
                    url="https://financr-6d.herokuapp.com/"
                    style={{
                      height: 40,
                      width: 40,
                      marginLeft: "40px",
                      marginRight: "10px"
                    }}
                  />
                  Live
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;