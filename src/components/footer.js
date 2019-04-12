import React from "react";
import "./footer.css";
import classnames from "classnames";

const Footer = props => (
  <footer>
    <div className="footerWrapper">
      <div className="footer--Title">
        <h1>
          Want to chat?{" "}
          <a
            href="mailto:marques.ph@gmail.com"
            target="_blank"
            className="thirdLink"
          >
            Say hello
          </a>
        </h1>
      </div>
      <div className="footer-Image">
        <img
          src={require("../images/footer--illustration.png")}
          className="f-img"
        />
      </div>
    </div>
    <hr />
    <nav>
      <ul className="footerLinks">
        <li>
          <a
            href="https://dribbble.com/marques_ph"
            target="_blank"
            className="otherLink"
          >
            Dribbble
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/phmarques"
            target="_blank"
            className="otherLink"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@marques_ph"
            target="_blank"
            className="otherLink"
          >
            Medium
          </a>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
