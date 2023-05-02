import React, { useEffect } from "react";
import "../css/Navbar.css";

export default function Navbar() {
  // const navbar = React.useRef(null);

  // function fixed() {
  //   const element = navbar.current;
  //   if (window.pageYOffset >= element.offsetTop + 1) {
  //     navbar.current.classList.add("sticky");
  //   } else {
  //     navbar.current.classList.remove("sticky");
  //   }
  // }

  // window.onscroll = function () {
  //   fixed();
  // };

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
      </nav>
    </div>
  );
}
