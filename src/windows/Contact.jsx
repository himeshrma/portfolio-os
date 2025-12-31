import { WindowControl } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import React from "react";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControl target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img src="/images/himi.jpeg" alt="himi" className="w-25 rounded-full" />

        <h3>Let's Connect !</h3>
        <p>
          I design user-centric frontends, support them with solid backend
          logic, and experiment with Web3 technologies.
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqWgvpxqWSmBZCTjHQSwcnHJMVCLZKZcDjlfncgQHhnCNctTrXkKTdlFpwVkfMxFffZzMg"
        >
          sharmahimesh2003@gmail.com
        </a>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
