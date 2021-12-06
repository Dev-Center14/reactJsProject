import React from "react";
import Common from "./Common";
import img from "../src/img/Product Strategy.svg";

const Home = () => {
  return (
    <>
      <Common
        name="Grow Your Business with"
        line="We are the team of talented developer making websites."
        imgsrc={img}
        visit="/Service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
