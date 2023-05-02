import React from "react";
import "../css/About.css";

export default function About() {
  return (
    <div className="about--container">
      <div className="about">
        <div>
          <img src="https://picsum.photos/300" />
        </div>
        <div className="about--textinfo">
          <h3>About Me</h3>
          <h2>Front End Web Development</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
            consequuntur atque quibusdam beatae molestias qui eligendi, error
            deserunt quod consectetur, voluptas tenetur tempore rem nesciunt
            fugit sed vitae nam. Quos?
          </p>
        </div>
      </div>
    </div>
  );
}
