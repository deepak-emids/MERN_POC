import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Button() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Link to="/login">
      <button className="btn" onClick={handleLogout}>
        Logout
      </button>
    </Link>
  );
}
