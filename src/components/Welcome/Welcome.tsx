import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../../assets/leaf2.jpg";
import head from "../../assets/head-back.jpg";

import "./welcome.scss";

function Welcome() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="welcome-card">
      {/* <div className="welcome"> Welcome to CRM App</div> */}
      <img className="head" src={head} alt="this is logo"></img>

      <img className="back" src={back} alt="this is logo"></img>
    </div>
  );
}

export default Welcome;
