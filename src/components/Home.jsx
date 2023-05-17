import React from "react";
import "../css/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
export default function Home() {
  return (
    <div className="home--container">
      <div className="home">
        <div className="home--textinfo">
          <div className="home--header">
            <h2>
              Hello, I'm
              <span style={{ color: "#81ecec" }}> Jonathan Mengel</span>, a
              Front-End Web developer
            </h2>
          </div>
          <p>
            I am a Front-end Developer using mostly React from Ithaca, NY. I
            like to learn and I am working on more projects in React. I enjoy
            playing video games, exercising, and programming in my free time.
          </p>
        </div>
        <div className="profile--container">
          <div className="image--container">
            <img className="home--image" src="public\assets\profile1.webp" />
          </div>
          <div className="home--buttons">
            <div className="home--button--container" id="about">
              <a href="https://github.com/digggggg">
                <FontAwesomeIcon icon={faGithub} size="2xl" />
              </a>
            </div>
            <div className="home--button--container">
              <a href="https://www.linkedin.com/in/jonathan-mengel-825179130/">
                <FontAwesomeIcon icon={faLinkedin} size="2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
