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
          <h3 style={{ color: "#81ecec" }}>About Me</h3>
          <h2>Front End Web Development</h2>
          <p>
            I have always had an interest in coding. I started self teaching
            before and during community college, my Computer Science professor
            recommended me to a bootcamp that was a faster pace then school. I
            completed the Web Development Bootcamp from Berkley Extension and
            now I am looking to improve my ability by finding good mentorship.
          </p>
          <div className="about--list--with--header">
            <h3 id="list--title">Tech</h3>
            <div className="list--container">
              <ul className="tech--list1">
                <li style={{ color: "#81ecec" }}>React</li>
                <li>Express</li>
                <li style={{ color: "#81ecec" }}>Sequelize</li>
                <li>MongoDB</li>
                <li style={{ color: "#81ecec" }}>MySQL</li>
              </ul>
              <ul className="tech--list2">
                <li>CSS</li>
                <li style={{ color: "#81ecec" }}>Tailwind</li>
                <li>Bootstrap</li>
                <li style={{ color: "#81ecec" }}>JS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
