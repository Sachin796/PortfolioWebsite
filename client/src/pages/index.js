import React from "react";
import NavItems from "../components/nav";
import Intro from "../components/intro";
import AboutMe from "../components/aboutme";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Projects from "../components/projects";
import Techskills from "../components/techskills";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ParticleComponent from "../components/particlejs/particle.js";

function MainPage() {
  return (
    <>
      <Router>
        <ParticleComponent></ParticleComponent>
        <NavItems></NavItems>
        <Intro></Intro>
        <AboutMe></AboutMe>
        <Techskills></Techskills>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default MainPage;
