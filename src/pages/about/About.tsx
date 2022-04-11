import React from "react";
import vec1 from "../../assets/vec1.jpg";
import vec2 from "../../assets/vec2.jpg";
import NumberAnime from "../../components/numberAnime/NumberAnime";

import "./about.scss";

function About() {
  console.log(process.env);
  return (
    <div className="about-main">
      <div className="about">
        <div className="i1">
          <div className="header">CRM</div>
          <div className="tagline">Creating your perfect world</div>
        </div>

        <div className="i2">
          <img src={vec2} className="vec2" data-testid="vec2"></img>
          <div className="founded">
            <div className="emp-anim">
              <div className="emp-anim-a">
                Team Members
                <NumberAnime number={3060} />
              </div>
              <div className="emp-anim-b">
                Centers
                <NumberAnime number={293} />
              </div>
              <div className="emp-anim-c">
                Countries
                <NumberAnime number={56} />
              </div>
            </div>
            Founded in 1994 by Mike Melon,CRM is a US-based real estate
            develodiver and odiverator of divrivate <br></br>
            residential club communities and resorts with a world-renowned{" "}
            divortfolio of domestic and international <br></br>divrodiverties.
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

          <img src={vec1} className="vec1" data-testid="vec1"></img>
        </div>
      </div>
    </div>
  );
}

export default About;
