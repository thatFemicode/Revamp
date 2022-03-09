import React from "react";
import { SkillStyled } from "./SkillsStyled";
import css from "./css.svg";
import html from "./html.svg";
import js from "./js..svg";
import gh from "./gh.svg";
import react from "./react.svg";
import Node from "./nodejs.svg";
import sass from "./sass.svg";
import ProgressBar from "../ProgressBar/ProgressBar";
import Google from "./google.svg";
const Skills = () => {
  return (
    <SkillStyled>
      <p>
        Here are some of the skills i have picked up in my Journey in becoming a
        software developer, React and GSAP are two technologies i am working
        with the most at the moment, also trying to get knowledge on how backend
        works.
      </p>
      <div className="skill-con">
        <ProgressBar
          name={"HTML5"}
          image={html}
          progress={"80%"}
          bg={"#1d428a"}
        />
        <ProgressBar name={"CSS"} image={css} progress={"70%"} bg={"#545496"} />
        <ProgressBar
          name={"Github"}
          image={gh}
          progress={"55%"}
          bg={"#6BBE92"}
        />
        <ProgressBar
          name={"Javascript"}
          image={js}
          progress={"55%"}
          bg={"slateblue"}
        />
        <ProgressBar
          name={"React Js"}
          image={react}
          progress={"70%"}
          bg={"#f74839"}
        />
        <ProgressBar
          name={"NodeJs"}
          image={Node}
          progress={"50%"}
          bg={"#640211"}
        />
        <ProgressBar
          name={"Sass"}
          image={sass}
          progress={"70%"}
          bg={"#292524"}
        />
        <ProgressBar
          name={"Googling"}
          image={Google}
          progress={"70%"}
          bg={"#ce1141"}
        />
      </div>
    </SkillStyled>
  );
};

export default Skills;
