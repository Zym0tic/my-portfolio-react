import React from "react";
import projects from "../project.js";

export default function Portfolio(props) {
  return (
    <div>
      <h1>Portfolio</h1>
      <ul className="Project-group row">
        {projects.map((project) => (
          <li className="project-group-item col-xs-12 col-md-6 col-lg-4" key={project.id}>

            <div className="card text-center">
              <div className="card-header">
                <h2>{project.name}</h2>
              </div>
              <div className="card-body">
              <img className="img-fluid" src={project.img} alt="BigCo Inc. logo"/>,
                {project.description}</div>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
}
