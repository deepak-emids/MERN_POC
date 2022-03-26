import React from "react";
import { useNavigate } from "react-router-dom";
import land from "../../assets/emp2.jpg";
import "./welcome.scss";

function Welcome() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="welcome-card">
      {/* <div className="welcome"> Welcome to CRM App</div> */}
      <img className="land" src={land} alt="this is logo"></img>
    </div>
  );
}

export default Welcome;
