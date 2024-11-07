
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin,  } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-box">
          <h3>Services</h3>
          <p>Email Marketing</p>
          <p>Compaigns</p>
          <p>Brandings</p>
          <p>Offline</p>
        </div>

        <div className="footer-box">
          <h3>About</h3>
          <p>Our Story</p>
          <p>Benefits</p>
          <p>Team</p>
          <p>Careers</p>
        </div>

        <div className="footer-box">
          <h3>Help</h3>
          <p>FAQS</p>
          <p>Contact Us</p>
        </div>

        <div className="footer-box">
          <h3>Social</h3>
          <div className="social">
            <li>
              <Link className="icon" target="_blank" href={"https://www.linkedin.com/in/bakhtawar-khan-4ab7a32b5/"}>
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link className="icon"target="_blank" href={"https://www.linkedin.com/in/bakhtawar-khan-4ab7a32b5/"} >
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link className="icon" target="_blank" href={"https://github.com/baki1996"}>
                <FaGithub />
              </Link>
            </li>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p>Copyright 2024 by Bakhtawar Khan</p>
      </div>
    </div>
  );
};

export default Footer;
