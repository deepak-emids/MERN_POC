import React, { useState } from "react";
import logo from "../../assets/Image 11.jpg";
import Signin from "../../components/signin/Signin";

import "./user.scss";

function User() {
  const [login, setLogin] = useState(true);

  let handleSwitch = () => {
    setLogin(!login);
  };

  return (
    <div>
      <div className="mainpage">
        <div className="content">
          <div className="image">
            <img
              className="mainLogo"
              src={logo}
              alt="this is logo"
              style={{ width: "245px", height: "245px" }}
            ></img>
            <h3 style={{ paddingLeft: "6rem", paddingTop: "0rem" }}>Emids</h3>
          </div>

          <div className="formContainer">
            <div className="switch">
              <h5
                className="sign"
                onClick={handleSwitch}
                style={{ fontSize: "25px" }}
              >
                Signin
              </h5>
            </div>
            <div className="include-form">{login ? <Signin /> : null}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
