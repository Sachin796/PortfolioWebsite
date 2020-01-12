import React from "react";
function Footer() {
  return (
    <div>
      <footer className="page-footer">
        <div className="container center">
          <div className="row">
            <div className="col l6 s12">
              <section id="links">
                <a href="#" className="fa fa-github"></a>
                <a href="#" className="fa fa-linkedin"></a>
                <a href="#" className="fa fa-twitter"></a>
                <a href="#" className="fa fa-envelope"></a>
              </section>
              <a className="grey-text text-lighten-3" href="#home">
                Home
              </a>
              <a className="grey-text text-lighten-3" href="#about">
                About
              </a>
              <a className="grey-text text-lighten-3" href="#project">
                Project
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
          <div className="container">© 2014 Copyright Text</div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
