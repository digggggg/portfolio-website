import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import "../css/Project.css";

export default function Project(props) {
  return (
    <div className="project">
      <div className="project--all">
        <div className="padding--style">
          <div className="project--img">
            <a href={props.website}>
              <img src={props.image} />
            </a>
          </div>
        </div>
        <div className="project--text">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <div className="project--links">
            <a href={props.website}>
              Live Project <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
            <a href={props.github}>
              Code <FontAwesomeIcon icon={faCode} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
