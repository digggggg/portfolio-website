import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import "../css/Navbar.css";

export default function Navbar() {
  const [menu, setMenu] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [desktopNavBar, setDesktopNavBar] = useState("desktop--navbar visible");

  // We have a burger bar that is always visible, when the burger bar is clicked we open the menu
  // classes for visibility of the menu, and a boolean to remember if it was clicked

  function updateMenu() {
    if (!isMenuClicked) {
      setMenu("menu visible");
      setDesktopNavBar("desktop--navbar hidden");
      console.log("menu visible");
    } else {
      setMenu("menu hidden");
      console.log("menu hidden");
      setDesktopNavBar("desktop--navbar visible");
    }

    setIsMenuClicked(!isMenuClicked);
    console.log(!isMenuClicked);
  }

  return (
    <div id="navbar">
      <nav
        className={isMenuClicked == true ? "navbar navbar--burger" : "navbar"}
      >
        <div className={desktopNavBar}>
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
        </div>
        <div className="burger--menu">
          <div className={menu} onClick={updateMenu}>
            {isMenuClicked && (
              <div className="menu">
                <FontAwesomeIcon icon={faX} size="2xl" className="exit--icon" />
                <div className="menu--options">
                  <a href="#home">Home</a>
                  <a href="#projects">Projects</a>
                  <a href="#about">About</a>
                  <a href="#contact">Contact</a>
                </div>
              </div>
            )}
          </div>
          <FontAwesomeIcon
            icon={faBars}
            size="2xl"
            onClick={updateMenu}
            className={
              isMenuClicked === true ? "burger--icon hidden" : "burger--icon"
            }
          />
        </div>
      </nav>
    </div>
  );
}
