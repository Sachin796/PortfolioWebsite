import React from "react";
function Contact() {
  return (
    <>
      <div
        className="row center"
        id="contactrow"
        style={{
          backgroundColor: "rgb(151, 151, 151,0.3)",

          height: "auto"
        }}
      >
        <div style={{ height: "auto" }}>
          <h4 id="justcolor" className="center" style={{ paddingTop: "25px" }}>
            Contact Us
          </h4>
          <hr style={{ width: "7%", marginBottom: "15px" }}></hr>
        </div>

        <div className="col l12 m12 s12 ">
          <p>Email</p>
          <p>
            <a href="#">sachinjaveri.2010@gmail.com</a>
          </p>
        </div>

        {/* Contact */}
        <div className="col l12 m12 s12 ">
          <p>Phone</p>
          <p>416-836-3359</p>
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
