import React from "react";
import "../css/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
export default function Contact() {
  return (
    <div className="contact--container" id="contact">
      <div className="contact">
        <h2 style={{ color: "#81ecec" }}>Contact Me</h2>
        <div className="contact--h3">
          <h3>I would love to hear from you</h3>
          <FontAwesomeIcon icon={faPaperPlane} />
        </div>

        <div className="social">
          <div>
            <a
              className="social--notskipped"
              href="mailto:digontheweb@gmail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2xl" />
            </a>
            <a
              className="social--link social--notskipped"
              href="mailto:digontheweb@gmail.com"
            >
              digontheweb@gmail.com
            </a>
          </div>
          <div>
            <a className="social--skipped" href="https://github.com/digggggg">
              <FontAwesomeIcon icon={faGithub} size="2xl" />
            </a>
            <a
              href="https://github.com/digggggg"
              className="social--link social--skipped"
            >
              Github
            </a>
          </div>
          <div>
            <a
              className="social--notskipped"
              href="https://www.linkedin.com/in/jonathan-mengel-825179130/"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-mengel-825179130/"
              className="social--link social--notskipped"
            >
              LinkedIn
            </a>
          </div>
          <div>
            <a className="social--skipped">
              <FontAwesomeIcon icon={faPhone} size="2xl" />
            </a>
            <a className="social--link social--skipped">(607)227-4575</a>
          </div>
        </div>
      </div>
    </div>
  );
}
