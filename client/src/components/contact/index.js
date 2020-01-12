import React from "react";
function Contact() {
  return (
    <>
      <section className="center">Contact Info</section>
      <div id="contactMeContainer">
        <div className="col-lg-6 col-md-6 col-sm-12 center" id="contactviaForm">
          <p>Via Contact Form</p>
          <p>
            <a href="#">Link to Contact Form </a>
          </p>
        </div>
        <div
          className="col-lg-6 col-md-6 col-sm-12 center"
          id="contactviaSocialMedia"
        >
          <p>Via Social Media Form</p>
          <p>Social media Icons Here</p>
          <p>Contact Number</p>
        </div>
      </div>
    </>
  );
}

export default Contact;
