import React from "react";
function Techskills() {
  return (
    <div
      className="row"
      style={{
        backgroundColor: "rgb(151, 151, 151,0.3)",

        height: "auto"
      }}
    >
      <div className="row center col l12 m12">
        <h3 id="techskills">
          TECH SKILLS <hr style={{ width: "10%" }} />
        </h3>
        <div style={{ width: "100%" }}>
          <h5>FRONT END TECHNOLOGIES</h5>
          <div className="" style={{ height: "auto" }}>
            {/*  */}
            <fig className="col l2 m12 s12">
              <img
                src="./images/css.svg"
                style={{ marginLeft: "30px" }}
                className="icondimensions"
              />
              <figcaption>CSS</figcaption>
            </fig>

            {/*  */}
            <fig className="col l2 m12 s12">
              <img
                src="./images/html-5.svg"
                style={{ marginLeft: "30px" }}
                className="icondimensions"
              />
              <figcaption>HTML</figcaption>
            </fig>
            {/*  */}
            <fig className="col l2 m12 s12">
              <img
                src="./images/java-script.svg"
                style={{ marginLeft: "30px" }}
                className="icondimensions"
              />
              <figcaption>JS</figcaption>
            </fig>
            {/*  */}
            <fig className="col l2 m12 s12">
              <img
                src="./images/bootstrap.svg"
                style={{ marginLeft: "30px" }}
                className="icondimensions"
              />
              <figcaption>Bootstrap</figcaption>
            </fig>

            {/*  */}
            <fig className="col l2 m12 s12">
              <img
                src="./images/react.svg"
                style={{ marginLeft: "30px" }}
                className="icondimensions"
              />
              <figcaption>React</figcaption>
            </fig>

            {/*  */}
            <fig className="col l2 m12  s12">
              <img
                src="./images/sass.svg"
                style={{ marginLeft: "30px" }}
                className="icondimensions"
              />
              <figcaption>SASS</figcaption>
            </fig>
          </div>
        </div>

        <div>
          <h5 className="col l12 m12 s12">BACK END TECHNOLOGIES</h5>
          <div className="" style={{ height: "auto" }}>
            {/*  */}

            <fig className="col l4 m12 s12"></fig>

            {/*  */}
            <fig className="col l2 m12  s12">
              <img
                src="./images/nodejs.svg"
                style={{ marginLeft: "30px" }}
                className="icondimensions"
              />
              <figcaption>Node</figcaption>
            </fig>
            {/*  */}
            <fig className="col l2 m12  s12">
              <img
                src="./images/expressjs.svg"
                style={{ marginLeft: "30px" }}
                className="icondimensions"
              />
              <figcaption>Express</figcaption>
            </fig>
            {/*  */}

            <fig className="col l4 m12 s12"></fig>
          </div>
        </div>

        <div>
          <h5 className="col l12 m12 s12">DATABASE AND DEPLOYMENT</h5>
          <div className="col l12" style={{ height: "auto" }}>
            {/*  */}

            <fig className="col l2 m12 s12"></fig>

            {/*  */}
            <fig className="col l2 m12  s12">
              <img
                src="./images/mysql.svg"
                style={{ marginLeft: "30px" }}
                className="icondimensions"
              />
              <figcaption>MySQL</figcaption>
            </fig>
            {/*  */}
            <fig className="col l2 m12  s12">
              <img
                src="./images/mongodb.svg"
                style={{ marginLeft: "30px" }}
                className="icondimensions"
              />
              <figcaption>MongoDB</figcaption>
            </fig>
            {/*  */}
            <fig className="col l2 m12  s12">
              <img
                src="./images/heroku.svg"
                style={{ marginLeft: "30px" }}
                className="icondimensions"
              />
              <figcaption>Heroku</figcaption>
            </fig>
            {/*  */}
            <fig className="col l2 m12  s12">
              <img
                src="./images/netlify.png"
                style={{ marginLeft: "30px" }}
                className="icondimensions"
              />
              <figcaption>Netlify</figcaption>
            </fig>
            {/*  */}

            <fig className="col l4 m12 s12"></fig>
          </div>
        </div>

        <div>
          <h5 className="col l12 m12 s12">PROGRAMMING LANGUAGES</h5>
          <div className="col l12 m12 s12" style={{ height: "auto" }}>
            {/*  */}

            <fig className="col l4 m12 s12"></fig>

            {/*  */}
            <fig className="col l2 m12  s12">
              <img
                src="./images/java.svg"
                style={{ marginLeft: "30px" }}
                className="icondimensions"
              />
              <figcaption>JAVA</figcaption>
            </fig>
            {/*  */}
            <fig className="col l2 m12  s12">
              <img
                src="./images/php.svg"
                style={{ marginLeft: "30px" }}
                className="icondimensions"
              />
              <figcaption>PHP</figcaption>
            </fig>
            {/*  */}

            <fig className="col l4 m12 s12"></fig>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Techskills;
