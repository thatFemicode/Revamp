import React from "react";
import { ContactStyled } from "./ContactStyled";
import bg from "./line.svg";
const Contact = () => {
  return (
    <ContactStyled>
      <img className="lines" src={bg} alt="" />
      <h1>Impressed you?</h1>
      <p>
        Send me a mail, let's have a conversation about an opportunity you have
        for me, i'd be glad,
      </p>
      <p>
        Currently looking for my first role as a software engineer in the
        industry. I live in Lagos Nigeria and open to opportunities either
        remote or onsite, remote would be nice though 😁 because that is where
        the world is gravitating towards.
      </p>
      <p>I read my emails everyday so i'd get back to you ASAP! </p>
      <div className="socials">
        <ul>
          <li>
            <a href="">Resume</a>
          </li>
          <li>
            <a href="">LN</a>
          </li>
          <li>
            <a href="">YT</a>
          </li>
          <li>
            <a href="">GH</a>
          </li>
        </ul>
      </div>
    </ContactStyled>
  );
};

export default Contact;
