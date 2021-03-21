import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="https://twitter.com/NerioDev" target="blank" className="">
          <i className="icon-twitter icon"></i>
        </a>
        <a href="https://github.com/NerioBalza" target="blank" className="">
          <i className="icon-github icon"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/neriobalza/"
          target="blank"
          className=""
        >
          <i className="icon-linkedin icon"></i>
        </a>
      </div>
      <div className="links">
        <a href="https://github.com/NerioBalza/RickAndMorty" target="blank">
          GitHub Respository
        </a>
      </div>
      <div className="copyright">
        <p className="copyrighr__prg">Handcrafted by @neriobalza</p>
      </div>
    </footer>
  );
};

export default Footer;
