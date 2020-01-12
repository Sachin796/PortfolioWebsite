import React from "react";
function Techskills() {
  return (
    <div className="row" style={{ height: "auto" }}>
      <div className="row center col l12">
        <h3 id="techskills">
          TECH SKILLS <hr style={{ width: "10%" }} />
        </h3>
        <div>
          <h5>FRONT END TECHNOLOGIES</h5>
          <div className="" style={{ height: "auto" }}>
            <img src="./images/css.svg" className="icondimensions" />
            <img src="./images/html-5.svg" className="icondimensions" />
            <img src="./images/java-script.svg" className="icondimensions" />
            <img src="./images/bootstrap.svg" className="icondimensions" />
            <img src="./images/react.svg" className="icondimensions" />
          </div>
        </div>

        <div>
          <h5>BACK END TECHNOLOGIES</h5>
          <div className="" style={{ height: "auto" }}>
            <img src="./images/nodejs.svg" className="icondimensions" />
            <img src="./images/expressjs.svg" className="icondimensions" />
          </div>
        </div>

        <div>
          <h5>DATABASE AND DEPLOYMENT</h5>
          <div className="" style={{ marginLeft: "130px", height: "auto" }}>
            <img src="./images/mysql.svg" className="icondimensions" />
            <img src="./images/mongodb.svg" className="icondimensions" />
            <img src="./images/heroku.svg" className="icondimensions" />
            <img src="./images/netlify.png" className="icondimensions" />
          </div>
        </div>

        <div>
          <h5>PROGRAMMING LANGUAGES</h5>
          <div className="" style={{ height: "auto" }}>
            <img src="./images/java.svg" className="icondimensions" />
            <img src="./images/php.svg" className="icondimensions" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Techskills;
