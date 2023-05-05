import React from "react";
import "../css/About.css";

export default function About() {
  return (
    <div className="about--container">
      <div className="about">
        <div className="about--image--wrapper">
          <img src="src\assets\computers.webp" />
        </div>
        <div className="about--textinfo">
          <h3>About Me</h3>
          <h2>Front End Web Development</h2>
          <p>
            I have always had an interest in coding. I started self teaching
            before and during community college, my Computer Science professor
            recommended me to a bootcamp that was a faster pace then school. I
            completed the Web Development Bootcamp from Berkley Extension and
            now I am looking to improve my ability by finding good mentorship.
          </p>
          <div>
            <h3>Tech</h3>
            <ul className="tech--list">
              <li>React</li>
              <li>Express</li>
              <li>Sequelize</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>CSS</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
              <li>JS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
