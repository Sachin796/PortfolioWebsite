import React from "react";

import Links from "../socialiconlinks";
function Footer() {
  return (
    <div>
      <footer className="page-footer">
        <div className="container center">
          <div className="row">
            <div className="col l6 s12">
              <Links></Links>
              <a className="grey-text text-lighten-3" href="#home">
                Home |
              </a>
              <a className="grey-text text-lighten-3" href="#about">
                About |
              </a>
              <a className="grey-text text-lighten-3" href="#project">
                Project |
              </a>
              <a
                className="grey-text text-lighten-3"
                href="#contactMeContainer"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        <div className="footer-copyright center">
          <div className="container">© 2020 Copyright Text</div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
