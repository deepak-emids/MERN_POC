import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import "./contact.scss";

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="Contact-area">
      <div className="Contact-placed">Reach Us Here</div>

      <div>
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
    </div>
  );
}

export default Contact;
