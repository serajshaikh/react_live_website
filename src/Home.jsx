import React from "react";
import web from "./images/web.png";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common 
      name="Grow Your Business with"
      imgsrc={web} 
      visit="/service"
      btname="Get Started"/>
    </>
  );
};

export default Home;
