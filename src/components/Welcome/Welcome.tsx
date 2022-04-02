import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../../assets/table.jpg";

import "./welcome.scss";

function Welcome() {
  return (
    <div className="welcome-card">
      <img className="back" src={back} alt="this is logo"></img>
    </div>
  );
}

export default Welcome;
