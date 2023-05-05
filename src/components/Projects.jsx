import React from "react";
import Project from "./Project";
import "../css/Projects.css";
import data from "../data.js";
export default function Projects() {
  var projects = data.map((item) => {
    return <Project {...item} />;
  });
  return (
    <div id="projects">
      <div className="projects">{projects}</div>
    </div>
  );
}
