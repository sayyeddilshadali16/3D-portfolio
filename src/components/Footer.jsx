import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__bg">
          <div className="footer__container container grid">
            <div>
              <h1 className="footer__title">Sayyed Dilshad Ali</h1>
              <span className="footer__subtitle">MERN Stack Developer</span>
            </div>
            <ul className="footer__links">
              <li>
                <a href="#contact" className="footer__link">
                  Contact
                </a>
              </li>
              <li>
                <a href="#project" className="footer__link">
                  Projects
                </a>
              </li>
            </ul>
            <div className="footer__socials">
              <a
                href="https://www.linkedin.com/in/sayyed-dilshad-ali-3b5a761a0/"
                target="_blank"
                className="footer__social"
              >
                <i className="uil uil-linkedin"></i>
              </a>
              <a
                href="https://github.com/sayyeddilshadali16"
                target="_blank"
                className="footer__social"
              >
                <i className="uil uil-github"></i>
              </a>
              <a
                href="https://twitter.com/SayyedDilshadA8"
                target="_blank"
                className="footer__social"
              >
                <i className="uil uil-twitter"></i>
              </a>
            </div>
          </div>
          <p className="footer__copy">
            &#169; Sayyed Dilshad Ali. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
