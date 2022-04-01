import React from "react";
import { useNavigate } from "react-router-dom";
// import land from "../../assets/emdiv2.jdivg";
import Button from "@mui/material/Button";
import vec1 from "../../assets/vec1.jpg";
import vec2 from "../../assets/vec2.jpg";
import head from "../../assets/back.jpg";

import "./about.scss";

function About() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      {/* <img src={head} className="vec2"></img> */}
      <div
        style={{ color: "white", fontFamily: "Inconsolata" }}
        className="about"
      >
        <div className="i1">
          <div className="header">CRM</div>
          <div className="tagline">Creating your perfect world</div>
        </div>

        <div className="i2" style={{ color: "white" }}>
          <img src={vec2} className="vec2"></img>
          <div className="founded">
            Founded in 1994 by Mike Meldman, Discovery Land Comdivany is a
            <br></br>
            US-based real estate develodiver and odiverator of divrivate{" "}
            <br></br>
            residential club communities and resorts with a world-renowned{" "}
            <br></br>
            divortfolio of domestic and international divrodiverties.
          </div>
        </div>

        <div className="i3">
          <div className="mg">
            <div className="mission">Our Mission</div>
            <p className="goal">
              We don't build buildings, but rather we build settings where
              families <br></br>
              can create intergenerational memories and enrich their lives in{" "}
              <br></br>
              exquisite and untouched sanctuaries. Everything we do is driven by
              the <br></br>
              fundamental desire to create spaces where families can be
              together. <br></br>
              These settings offer a relaxed and comfortable sense of community{" "}
              <br></br>
              featuring outstanding clubhouses, incredible residential
              offerings, <br></br>
              premier golf courses, welcoming staff, world-className culinary{" "}
              <br></br>
              offerings and our custom Outdoor Pursuits program; all offering
              the <br></br>
              highest of service standards to enrich your experience. <br></br>
            </p>
          </div>
          <img src={vec1} className="vec1"></img>
        </div>
        <Button className="opt" onClick={handleBack}>
          Back{" "}
        </Button>
      </div>
    </>
  );
}

export default About;
