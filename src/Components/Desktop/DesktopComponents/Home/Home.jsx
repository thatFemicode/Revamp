import React from "react";
import { HomeStyled } from "./HomeStyled";
import avatar from "./avatar.svg";
import bg from "./lines.svg";
import location from "./location.svg";
import email from "./email.svg";
const Home = () => {
  return (
    <HomeStyled>
      <img className="lines" src={bg} alt="" />
      <div className="home-text">
        <h1>Ogunleye Oluwafemi</h1>
        <h2>Frontend Developer</h2>
        <p>
          Hi there 👋🏽, I'm a frontend developer specializing in building
          products having great user experiences for different people using
          technology.
        </p>
        <button className="btn">
          <a
            href="https://drive.google.com/file/d/1qIQpGA7s6zsW8Cnfc0oiamak9Z76gtWd/view?usp=sharing"
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
              <p>Lagos Nigeria</p>
            </div>

            <div className="icon">
              <img src={email} alt="" />
              <p>Leyedavid10@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <img className="avatar" src={avatar} alt="" />
    </HomeStyled>
  );
};

export default Home;
