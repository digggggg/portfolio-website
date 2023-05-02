import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import "../css/Project.css";

export default function Project() {
  return (
    <div className="project">
      <div className="project--all">
        <div className="project--img">
          <img src="src\assets\date-night-bites.webp" />
        </div>
        <div className="project--text">
          <h2>Benji</h2>
          <p>
            Lorem ipsum dolor sit amet, consect adipiscing elit lobortis arcu
            enim urna scing praesent velit viverra sit lorem.Lorem ipsum dolor
            sit amet, consect adipiscing elit lobortis arcu enim urna scing
            praesent velit viverra sit lorem.
          </p>
          <div className="project--links">
            <a>
              Live Project <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
            <a>
              Code <FontAwesomeIcon icon={faCode} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
