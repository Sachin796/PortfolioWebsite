import React from "react";

function Intro() {
  return (
    <div className="row" id="home">
      <div id="introDiv" className="center-align">
        <section>
          <h2 id="name"></h2>
        </section>
        <section id="description">
          <h6>A very enthusiastic Web developer</h6>

          <h6>pursuing a carrer path towards becoming a</h6>
          <h6>FULL STACK WEB DEVELOPER</h6>
        </section>
        <section id="links">
          <a href="#" className="fa fa-github"></a>
          <a href="#" className="fa fa-linkedin"></a>
          <a href="#" className="fa fa-twitter"></a>
          <a href="#" className="fa fa-envelope"></a>
        </section>
      </div>
    </div>
  );
}

export default Intro;
