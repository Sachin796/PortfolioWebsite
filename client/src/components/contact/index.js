import React from "react";
function Contact() {
  return (
    <>
      <div
        className="row center"
        id="contactrow"
        style={{ backgroundColor: "rgb(151, 151, 151,0.3)", height: "auto" }}
      >
        {/* <div className="col l12 m12 s12" id="contactMeContainer">
          <div className="col l2 center" id="contactviaForm">
            <p>Via Contact Form</p>
            <p>
              <a href="#">Link to Contact Form </a>
            </p>
          </div>
          <div className="col center" id="contactviaSocialMedia">
            <p>Via Social Media Form</p>
            <p>Social media Icons Here</p>
            <p>Contact Number</p>
          </div>
        </div> */}
        {/* Email */}
        <div className="col l12 m12 s12 ">
          <p>Email</p>
          <p>
            <a href="#">sachinjaveri.2010@gmail.com</a>
          </p>
        </div>

        {/* Contact */}
        <div className="col l12 m12 s12 ">
          <p>Phone</p>
          <p>
            <a href="#">416-836-3359 </a>
          </p>
        </div>

        {/* Linkedln */}
        <div className="col l12 m12 s12 ">
          <p>Linkedln</p>
          <p>
            <a href="https://www.linkedin.com/in/sachin-javeri-42436280">
              https://www.linkedin.com/in/sachin-javeri-42436280
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
