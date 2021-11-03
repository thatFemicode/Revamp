import React from "react";
import SkillButton from "./SkillButton";
import logo from "./lines.svg";
import { PersonalStyled } from "./PersonalStyled";
const Personal = () => {
  return (
    <PersonalStyled>
      <div>
        <h2>Get in Touch</h2>
        <p>
          Information about my background, and schooling can be found in my
          resume interested in getting to know me or having a conversation with
          me regarding a job or anything, send me a mail, i'd love that.
        </p>
        <svg className="svgs" width="50" height="50" viewBox="0 0 256 256">
          <path
            fill="none"
            stroke="#000000"
            strokeWidth="13"
            d="m 15.625507,46.199537 55.767886,-32.030352 55.623047,32.281229 -0.14485,64.311586 0.14485,-64.311586 55.76788,-32.030352 55.62305,32.281229 -0.14485,64.311579 -55.76788,32.03036 -55.62305,-32.28123 55.62305,32.28123 -0.14485,64.31158 -55.76788,32.03035 L 70.958866,207.10393 71.103708,142.79235 126.87159,110.762 71.103708,142.79235 15.480664,110.51112 Z"
          />
        </svg>
      </div>
      {/* <div className="skill-con">
        <h4>Personal Skill</h4>
        <SkillButton name={"Creative"} bg={"#6BBE92"} />
        <SkillButton name={"Problem Solver"} bg={"#F44E77"} />
        <SkillButton name={"Fast Learner"} bg={"#16194F"} />
        <SkillButton name={"Team Player"} bg={"#554DDE"} />
        <SkillButton name={"Professional"} bg={"#9A94FF"} />
      </div> */}
    </PersonalStyled>
  );
};

export default Personal;
