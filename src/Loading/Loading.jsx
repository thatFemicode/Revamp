import React from "react";
import { LoadingStyled } from "./LoadingStyled.js";

const Loading = () => {
  return (
    <LoadingStyled>
      <svg
        className="svg"
        // ref={(el) => (logo = el)}
        width="400"
        height="300.573"
        viewBox="0 0 256 256"
      >
        <path
          className="logo"
          fill="none"
          stroke="#000000"
          strokeWidth="13"
          d="m 15.625507,46.199537 55.767886,-32.030352 55.623047,32.281229 -0.14485,64.311586 0.14485,-64.311586 55.76788,-32.030352 55.62305,32.281229 -0.14485,64.311579 -55.76788,32.03036 -55.62305,-32.28123 55.62305,32.28123 -0.14485,64.31158 -55.76788,32.03035 L 70.958866,207.10393 71.103708,142.79235 126.87159,110.762 71.103708,142.79235 15.480664,110.51112 Z"
        />
      </svg>
    </LoadingStyled>
  );
};

export default Loading;
