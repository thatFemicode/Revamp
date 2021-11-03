import React from "react";
import { HomeStyled } from "./HomeStyled";
import avatar from "./avatar.svg";
import bg from "./lines.svg";
import location from "./location.svg";
import contact from "./contact.svg";
import email from "./email.svg";
const Home = ({ loading, setLoading }) => {
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
        <button class="btn">
          <a href="" target="_blank">
            Download Resume
          </a>
        </button>
        <ul class="social">
          <li class="social-link">
            <a href="">TW</a>
          </li>
          <li class="social-link">
            <a href="">GH</a>
          </li>
          <li class="social-link">
            <a href="">LN</a>
          </li>
        </ul>
        <div className="icon-text">
          <div className="icons">
            <div className="icon">
              <img src={location} alt="" />
              <p>Lagos Nigeria</p>
            </div>
            <div className="icon">
              <img src={contact} alt="" />
              <p>09057537519</p>
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
