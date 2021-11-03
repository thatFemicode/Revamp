import React from "react";
import { ProgressStyled } from "./ProgressStyled";

const ProgressBar = ({ name, image, progress, bg, desc }) => {
  return (
    <ProgressStyled>
      <div className="skill">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="progress-con">
          <p>{name}</p>
          {/* <div className="progress-bar" style={{ background: "white" }}>
            <div
              className="progress"
              style={{ background: bg, width: progress }}
            ></div>
          </div> */}
        </div>
      </div>
    </ProgressStyled>
  );
};

export default ProgressBar;
