import React from "react";
import img from "../src/img/Product Documentation.svg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={img}
        visit="/Contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
