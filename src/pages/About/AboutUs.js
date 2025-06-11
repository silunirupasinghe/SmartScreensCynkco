import { Box } from "@mui/material";
import React, {useEffect} from "react";
import AboutUsSec1 from "./AboutUsSec1";
import AboutUsSec2 from "./AboutUsSec2";
import Contact from "../Contact/Contact";
import AboutUsSec3 from "./AboutUsSec3";

function AboutUs() {
  useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top when the component mounts
    }, []);
  return (
    <>
      <AboutUsSec1/>
      <AboutUsSec2/>
      <AboutUsSec3/>
      <Contact/>
    </>
  );
}

export default AboutUs;
