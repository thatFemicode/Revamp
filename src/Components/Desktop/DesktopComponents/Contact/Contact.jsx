import React from "react";
import { ContactStyled } from "./ContactStyled";
import bg from "./line.svg";
import email from "./email.svg";
const Contact = () => {
  return (
    <ContactStyled>
      {/* remote or onsite, remote would be
        nice though 😁 because that is where the world is gravitating towards. */}
      <img className="lines" src={bg} alt="" />
      <h1>Impressed you?</h1>
      <p>
        Send me a mail, let's have a conversation about an opportunity you have
        for me, i'd be glad,
      </p>
      <div className="icon">
        <img src={email} alt="" />
        <p>Leyedavid10@gmail.com</p>
      </div>
      <p>I read my emails everyday so i'd get back to you ASAP! </p>
      <p>
        Currently looking for my first role as a software engineer in the
        industry. Open to opportunities 🚀
      </p>

      <div className="socials">
        <ul>
          <li>
            <a
              href="https://drive.google.com/file/d/1ZnDkZhO58WuqwnYhG2ZjEzhZwlvnbo0w/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/leyedavid10"
              target="_blank"
              rel="noreferrer"
            >
              TW
            </a>
          </li>
          <li>
            <a
              href="https://github.com/thatFemicode"
              target="_blank"
              rel="noreferrer"
            >
              GH
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/oluwafemi-david-ogunleye-b5696a144/"
              target="_blank"
              rel="noreferrer"
            >
              LN
            </a>
          </li>
        </ul>
      </div>
    </ContactStyled>
  );
};

export default Contact;
