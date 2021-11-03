import React from "react";

const SkillButton = ({ name, bg }) => {
  return (
    <div>
      <div className="skill" style={{ background: bg }}>
        <div className="skills-btn">
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
};

export default SkillButton;
