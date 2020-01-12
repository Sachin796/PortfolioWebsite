import React from "react";

function AboutMe() {
  return (
    <div className="row center" id="aboutRow">
      <div id="cardRow">
        <div className="center">
          <h4>ABOUT ME</h4>
        </div>
        <div className="image" id="about">
          <img
            src="images/background1.jpg"
            style={{ height: "210px", width: "230px", borderRadius: "50%" }}
          />
        </div>
        <div className="l4 m6 s12" style={{ margintop: "40px" }}>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div style={{ margintop: "40px" }}>
          <form method="get" action="file.doc">
            <button type="submit" id="resumebtn">
              RESUME
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
