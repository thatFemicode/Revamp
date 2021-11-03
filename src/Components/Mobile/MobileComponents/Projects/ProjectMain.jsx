import React from "react";
import { ProjectMainStyled } from "./ProjectMainStyled";
const ProjectMain = ({ project }) => {
  const { id, name, body, tools, url, git } = project;
  return (
    <ProjectMainStyled
      bgColor={id === 1 && " #6BBE92"}
      bgColor2={id === 2 && "#16194F"}
      bgColor3={id === 3 && "#F44E77"}
      bgColor4={id === 4 && "#554DDE"}
      bgColor5={id === 5 && "#9A94FF"}
    >
      <h1>{name}</h1>
      <p>{body}</p>
      <p> {tools.join(", ")} </p>
      <a href={url}>Live Url</a>
      <a href="">
        <img src={git} alt="" />
        Source code
      </a>
    </ProjectMainStyled>
  );
};

export default ProjectMain;
