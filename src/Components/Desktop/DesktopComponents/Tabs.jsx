import React from "react";
import { TabsStyled } from "./TabsStyled";
import data from "./data";
import { useState } from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import Loading from "../../../Loading/Loading";

const Tabs = () => {
  const [info, setInfo] = useState(data);
  const [value, setValue] = useState(info[0]);
  // const [loading, setLoading] = useState(true);
  const renderData = () => {
    if (value === info[0]) {
      // setTimeout(() => {
      //   setLoading(false);
      // }, 3000);
      return <Home />;
    } else if (value === info[1]) {
      return <About />;
    } else if (value === info[2]) {
      return <Skills />;
    } else if (value === info[3]) {
      return <Project />;
    } else if (value === info[4]) {
      return <Contact />;
    }
  };
  // const images = useRef();
  // useEffect(() => {
  //   const kobe = images.current;
  //   gsap.to(kobe, {
  //     duration: 1,
  //     ease: "power2.out",
  //     // onRepeat: repeatFunction,
  //     yoyo: true,
  //     y: -20,
  //     repeat: -1,
  //   });
  // }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 10000);
  // }, []);
  return (
    <TabsStyled>
      <div className="btn-con">
        {data.map((data, index) => {
          return (
            <button
              key={data.id}
              className={`tabs-btn ${info[index] === value && "active-btn"} `}
              onClick={() => {
                setValue(info[index]);
                // console.log(info[index]);
              }}
            >
              {data.id === 1 ? (
                <svg width="60" height="60.573" viewBox="0 0 256 256">
                  <path
                    fill="#f5f5f5"
                    stroke="#000000"
                    stroke-width="13"
                    d="m 15.625507,46.199537 55.767886,-32.030352 55.623047,32.281229 -0.14485,64.311586 0.14485,-64.311586 55.76788,-32.030352 55.62305,32.281229 -0.14485,64.311579 -55.76788,32.03036 -55.62305,-32.28123 55.62305,32.28123 -0.14485,64.31158 -55.76788,32.03035 L 70.958866,207.10393 71.103708,142.79235 126.87159,110.762 71.103708,142.79235 15.480664,110.51112 Z"
                  />
                </svg>
              ) : (
                // <img src={data.tab} alt="" />
                data.tab
              )}
            </button>
          );
        })}
      </div>
      <div className="details-con">{renderData()}</div>
    </TabsStyled>
  );
};

export default Tabs;
