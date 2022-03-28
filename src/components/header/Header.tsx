import React from "react";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import { useNavigate } from "react-router-dom";
import "./header.scss";

function Header(props: any) {
  const navigate = useNavigate();

  let employeeId = localStorage.getItem("employeeId");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleNavbar = (text: string) => {
    props.handleSideBar(text);
  };

  return (
    <div className="main-header">
      <Button className="book-icon" onClick={handleHome}></Button>
      <div className="header">
        <div className="logo">
          <img className="imp"></img>
          <div className="logo-name">
            <span
              className="logo-text1"
              style={{ fontFamily: "Sedgwick Ave, cursive" }}
            >
              CRM{" "}
            </span>
          </div>
        </div>

        <div className="options">
          <Button onClick={() => handleNavbar("About")} className="opt">
            About{" "}
          </Button>
          <Button onClick={() => handleNavbar("Profile")} className="opt">
            Profile
          </Button>
          <Button onClick={() => handleNavbar("Employees")} className="opt">
            Employees
          </Button>
          <Button onClick={() => handleNavbar("Department")} className="opt">
            Department
          </Button>
          <Button onClick={() => handleNavbar("Help")} className="opt">
            Help
          </Button>
          <Button onClick={() => handleNavbar("Logout")} className="opt">
            Logout
          </Button>
        </div>
      </div>
      {/* 
        <div>
          <SearchIcon
            style={{
              display: "none",
              marginLeft: "2.5rem",
              paddingBottom: "2rem",
              position: "absolute",
            }}
            classNameName="magicon"
          />
        </div>

        <div classNameName="searchBar">
          <input classNameName="search" type="text" placeholder="Search"></input>
        </div>

        <div style={{ color: "white" }}>
          <Button onClick={handleLogout} style={{ color: "white" }}>
            <PermIdentityTwoToneIcon style={{ color: "white" }}></PermIdentityTwoToneIcon>
            {employeeId}
          </Button>
          <Button onClick={handleLogout} style={{ color: "white" }}>
            {" "}
           Logout
          </Button>
        </div> */}
    </div>
  );
}

export default Header;
