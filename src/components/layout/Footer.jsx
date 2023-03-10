import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__repo">
        <a href="https://github.com/neriobalza/rick-and-morty" target="blank">
          <p>Project repository</p>
        </a>
      </div>

      <ul className="footer__social-media">
        <li>
          <a href="https://github.com/neriobalza" target="blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/neriobalza_" target="blank">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/neriobalza/" target="blank">
            <FaLinkedinIn />
          </a>
        </li>
      </ul>

      <div className="footer__copyright">
        <p>
          Handcrafted by <span>@neriobalza</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
