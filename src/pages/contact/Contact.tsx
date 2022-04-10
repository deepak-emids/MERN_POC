import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import back from "../../assets/back.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./contact.scss";

function Contact() {
  // const navigate = useNavigate();

  return (
    <div className="contact-area">
      <div className="contact-table">
        <div className="contact-reach">Reach Us Here</div>

        <div data-testid="table1" className="table1">
          <table>
            <tr>
              <th>Email Us</th>
              <th>Contact Us</th>
              <th>Address</th>
            </tr>
            <tr>
              <td>crm.com</td>
              <td>+91 816347881</td>
              <td>Address</td>
            </tr>
          </table>
        </div>
        <div className="media1">
          <div className="icon">
            <FacebookIcon />
          </div>
          <TwitterIcon className="icon" />
          <YouTubeIcon className="icon" />
          <InstagramIcon className="icon" />
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

export default Contact;
