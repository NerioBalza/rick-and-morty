import React from "react";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-links">
        <div className="Social-media">
          <h2>Find me on</h2>
          <ul>
            <li>
              <a href="https://twitter.com/neriobalza_" target="blank">
                <span className="icon-twitter"></span>
              </a>
            </li>
            <li>
              <a href="https://github.com/neriobalza" target="blank">
                <span className="icon-github"></span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/neriobalza/" target="blank">
                <span className="icon-linkedin"></span>
              </a>
            </li>
          </ul>
        </div>

        <hr />

        <div className="More-links">
          <h2>More Links</h2>
          <ul>
            <li>
              <a
                href="https://github.com/neriobalza/rick-and-morty"
                target="blank"
              >
                <span className="icon-github"></span> Project <br /> Respository
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="Footer-copyright">
        <p>Handcrafted by @neriobalza.</p>
      </div>
    </footer>
  );
};

export default Footer;
