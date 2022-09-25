import React from "react";
import projects from "../project.js";

export default function Portfolio(props) {
  return (
    <div>
      <h1>Portfolio</h1>
      <section className="Project-group row">
        {projects.map((project) => (
          <wrapper
            className="project-group-item col-xs-12 col-md-6 col-lg-4"
            key={project.id}
          >
            <div className="card text-center">
              <div className="card-header">
                <h2>{project.name}</h2>
              </div>
              <div className="card-body">
                <img
                  className="img-fluid"
                  src={project.img}
                  alt= {project.name}
                />
                {project.description}
            <div class="d-grid gap-2">
            <a href={project.repo} class="btn btn-dark" role="button">Github Repo</a>
            <a href= {project.url} class="btn btn-dark" role="button">Deployed App</a>
            </div>
              </div>
            </div>
          </wrapper>
        ))}
      </section>
    </div>
  );
}
