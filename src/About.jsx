import React from "react";
import web from "./images/web.png";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common 
      name="Welcome To About Page"
      visit="/contact"
      imgsrc={web}
      btname="Get Contact"/>
    </>
  );
};

export default About;