import React from "react";
import { ProjectStyled } from "./ProjectStyled";
import content from "./data";
import ProjectMain from "./ProjectMain";
const Projects = () => {
  return (
    <ProjectStyled>
      <h2>Portfolio</h2>
      <h1>Some projects I have worked on lately</h1>
      <div className="projects">
        {content.map((project, index) => {
          return <ProjectMain key={project.id} project={project} />;
        })}
      </div>
    </ProjectStyled>
  );
};

export default Projects;
