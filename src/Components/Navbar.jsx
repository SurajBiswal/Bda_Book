import React from "react";
// import "./StyleComponents.Navbar.css";
import "../StyleComponents/Navbar.css";
import { Icon } from "@iconify/react";

function Navbar() {
  return (
    <div className="fullnav">
      <nav className="navbar">
        <div className="navbar-left">
          <Icon icon="healthicons:exercise-yoga" style={{ color: "#00B562" }} />
        </div>
        <div className="navbar-right">
          <a href="#">Play</a>
          <a href="#">Book</a>
          <a href="#">More</a>
          <a className="user-profile" href="#">
            SignUp
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
