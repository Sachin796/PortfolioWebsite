import React, { Component } from "react";
import Typed from "react-typed";
import Links from "../socialiconlinks";

import API from "../../utils/index.js";
import { render } from "react-dom";

export class Intro extends Component {
  state = {};
  componentDidMount() {
    const data = API.getintro();
    console.log(data);
  }
  render() {
    return (
      <div className="row" id="home">
        <div id="introDiv" className="center-align">
          <section>
            <h2 id="name">
              {/* <Typed
                strings={["My name is Sachin", "I am a Web Developer"]}
                typeSpeed={100}
                backSpeed={100}
                backDelay={1}
                loop
                smartBackspace
              /> */}
            </h2>
          </section>
          <section id="description">
            <h6>A very enthusiastic Web developer</h6>

            <h6>pursuing a carrer path towards becoming a</h6>
            <h6>FULL STACK WEB DEVELOPER</h6>
            <h6>pursuing a carrer path towards becoming a</h6>
            <h6>FULL STACK WEB DEVELOPER</h6>
          </section>
          <Links></Links>
        </div>
      </div>
    );
  }
}

export default Intro;
