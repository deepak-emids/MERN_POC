import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div>Logo</div>
        <div className="footer-data">
          <div className="footer-content">
            <div>GET IN TOUCH</div>
            <div>(480)634-5200</div>
            <div>mail@quovanatis.com</div>
          </div>
          <div className="footer-content">
            <div>About</div>
            <div>Our Services</div>
            <div>Presence</div>
          </div>
          <div className="footer-content">
            <div>Magazine</div>
            <div>Careers</div>
            <div>Foundation</div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>@Quovantis. All rights reserved</div>
      </div>
    </div>
  );
}

export default Footer;
