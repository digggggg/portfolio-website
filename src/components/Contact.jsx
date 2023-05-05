import React from "react";
import "../css/Contact.css";
export default function Contact() {
  return (
    <div className="contact--container" id="contact">
      <div className="contact">
        <h2 style={{ color: "#81ecec" }}>Contact Me</h2>
        <h3>I would love to hear from you</h3>
        <div>
          <div>
            <a href="mailto:digontheweb@gmail.com">digontheweb@mgmail.com</a>
            <a></a>
          </div>
          <div>
            <a>Github</a>
            <a></a>
          </div>
          <div>
            <a>LinkedIn</a>
            <a></a>
          </div>
          <div>
            <a>(607)227-4575</a>
            <a></a>
          </div>
        </div>
      </div>
    </div>
  );
}
