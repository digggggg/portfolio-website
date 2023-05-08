import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../css/Navbar.css";

export default function Navbar() {
  const [menu, setMenu] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // We have a burger bar that is always visible, when the burger bar is clicked we open the menu
  // classes for visibility of the menu, and a boolean to remember if it was clicked

  return (
    <div id="navbar">
      <nav className="navbar">
        <div className="nav--header">
          <h2>Jonathan</h2>
          <h2 style={{ color: "#81ecec" }}>.digggggg.</h2>
          <h2>dev</h2>
        </div>
        <div className="nav--links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="burger--menu">
          <FontAwesomeIcon icon={faBars} size="2xl" />
        </div>
      </nav>
    </div>
  );
}
