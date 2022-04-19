import React from "react";
import { HomeStyled } from "./HomeStyled";
import bg from "./lines.svg";
import location from "./location.svg";

import email from "./email.svg";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
const Home = () => {
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
  return (
    <HomeStyled>
      <img className="lines" src={bg} alt="" />
      <div className="home-top">
        <div className="home-top-avatar">
          <h1>Ogunleye Oluwafemi</h1>
          <h2>Frontend Developer</h2>
          <p>
            Hi there 👋🏽, I'm a frontend developer specializing in building
            products having great user experiences for different people using
            technology.
          </p>
          <button className="btn">
            <a
              href="https://drive.google.com/file/d/1e20ZmcUzQ-DDCnrjnl0m5Txs4_0y4U6F/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </button>
          <ul className="social">
            <li className="social-link">
              <a
                href="https://twitter.com/leyedavid10"
                target="_blank"
                rel="noreferrer"
              >
                TW
              </a>
            </li>
            <li className="social-link">
              <a
                href="https://github.com/thatFemicode"
                target="_blank"
                rel="noreferrer"
              >
                GH
              </a>
            </li>
            <li className="social-link">
              <a
                href="https://www.linkedin.com/in/oluwafemi-david-ogunleye-b5696a144/"
                target="_blank"
                rel="noreferrer"
              >
                LN
              </a>
            </li>
          </ul>
          <div className="icon-text">
            <div className="icons">
              <div className="icon">
                <img src={location} alt="" />
                <p>Lagos, Nigeria</p>
              </div>
              <div className="icon">
                <img src={email} alt="" />
                <p>Leyedavid10@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="home-logo">
            <svg
              // ref={images}
              width="100"
              height="100.573"
              viewBox="0 0 256 256"
            >
              <path
                fill="#f5f5f5"
                stroke="#000000"
                strokeWidth="13"
                d="m 15.625507,46.199537 55.767886,-32.030352 55.623047,32.281229 -0.14485,64.311586 0.14485,-64.311586 55.76788,-32.030352 55.62305,32.281229 -0.14485,64.311579 -55.76788,32.03036 -55.62305,-32.28123 55.62305,32.28123 -0.14485,64.31158 -55.76788,32.03035 L 70.958866,207.10393 71.103708,142.79235 126.87159,110.762 71.103708,142.79235 15.480664,110.51112 Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </HomeStyled>
  );
};

export default Home;
