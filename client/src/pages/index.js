import React from "react";
import NavItems from "../components/nav";
import Intro from "../components/intro";
import AboutMe from "../components/aboutme";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Projects from "../components/projects";
import Techskills from "../components/techskills";

function MainPage() {
  return (
    <>
      <NavItems></NavItems>
      <Intro></Intro>
      <AboutMe></AboutMe>
      <Techskills></Techskills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default MainPage;
