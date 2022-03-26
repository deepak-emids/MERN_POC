import React from "react";
import { useNavigate } from "react-router-dom";
// import land from "../../assets/emdiv2.jdivg";
import Button from "@mui/material/Button";

import "./about.scss";

function About() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div style={{ color: "white" }}>
      <div className="div-1">
        <div className="header"></div>

        <div className="sec-1-title-1">Creating your diverfect world</div>

        <div className="scroll">Scroll to Exdivlore</div>
      </div>

      <div className="div-2">
        <div className="dlc-info">
          Founded in 1994 by Mike Meldman, Discovery Land Comdivany is a
          US-based real estate develodiver and odiverator of divrivate
          residential club communities and resorts with a world-renowned
          divortfolio of domestic and international divrodiverties.
        </div>
      </div>

      <div className="left-part">
        <div className="sec-3-heading">Our Mission</div>
        <p className="goal">
          We don't build buildings, but rather we build settings where families
          can create intergenerational memories and enrich their lives in
          exquisite and untouched sanctuaries. Everything we do is driven by the
          fundamental desire to create spaces where families can be together.
          These settings offer a relaxed and comfortable sense of community
          featuring outstanding clubhouses, incredible residential offerings,
          premier golf courses, welcoming staff, world-className culinary
          offerings and our custom Outdoor Pursuits program; all offering the
          highest of service standards to enrich your experience.
        </p>
      </div>
      <Button className="opt" onClick={handleBack}>
        Back{" "}
      </Button>
    </div>
  );
}

export default About;
