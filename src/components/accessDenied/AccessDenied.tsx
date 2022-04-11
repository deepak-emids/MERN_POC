import React from "react";
import back from "../../assets/back.jpg";

import "./accessDenied.scss";

function AccessDenied() {
  return (
    <div className="contact-area">
      <div className="sorry">
        Sorry!!!
        <div className="sorry-1">
          You Are Not Permitted To Access This Resource
        </div>
      </div>

      <img
        className="back"
        src={back}
        alt="this is logo"
        data-testid="contact1"
      ></img>
    </div>
  );
}

export default AccessDenied;
