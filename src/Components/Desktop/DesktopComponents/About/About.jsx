import React from "react";
import { AboutStyled } from "./AboutStyled";
import line from "./line.svg";
const About = () => {
  return (
    <AboutStyled>
      <img src={line} alt="" className="lines" />
      <h1>
        Hi there, I'm <strong>Femi </strong>
      </h1>
      <p>Frontend Developer</p>
      <p>
        I started my software development (Frontend) journey during the
        pandemic, i had always been enthusiastic about bringing things to life
        with code but never really had the opportunity to pursue software
        development. I am currently a self-taught developer on an everyday
        journey on getting better in my craft.
      </p>
      <p>
        In my free time i really enjoy watching and listening to anything
        basketball because that is my favorite sport to watch, i had to stop
        watching football because my team gave me serious anxiety whenever they
        played 🤣🤣.
      </p>
      {/* <p>
        My journey in the past 1 year of software development has taught me a
        lot, patience, perseverance amongst others. I am not the smartest of
        individuals but when i put my mind to something, i try as much to make
        sure a solution is found either through enormous googling which is a
        skill for software developers or via other means.
      </p> */}
      {/* <p>
        I'm sure you have noticed the Logo you have been seeing on my screen it
        basically spells my name, OGUNLEYE OLUWAFEMI DAVID, got the inspiration
        from the late great Kobe Bryant.
      </p> */}
      <p>
        Generally things that interest me are Startups, really wish i could be a
        key piece to an organization or startup company starting out either it
        be in the finance industry or otherwise as it brings an opportunity to
        grow and become a better engineer. I am also gravitating towards NFT's
        although i do not seem to really get how that works, hopefully i do
        soon.
      </p>
      <p>
        My goal is to provide nice and smooth digital experience for customers
        or consumers of products i will be contributing to using software and
        technology.
      </p>
    </AboutStyled>
  );
};

export default About;
