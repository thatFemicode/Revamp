import React from "react";
import { ProjectStyled } from "./ProjectStyled";
import content from "./data";
import ProjectMain from "./ProjectMain";
const Project = () => {
  return (
    <ProjectStyled>
      <ProjectStyled>
        <h2>Some projects i have worked on lately</h2>
        <div className="projects">
          {content.map((project, index) => {
            return <ProjectMain key={project.id} project={project} />;
          })}
        </div>
        <h2>Visit my Github for other projects.</h2>
      </ProjectStyled>
    </ProjectStyled>
  );
};

export default Project;
