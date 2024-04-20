import React from "react";
import footerLogo from "../../assets/nav-logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FOOTER_LIST } from "../../static";
import "./Footer.css";
import cards from "../../assets/cards.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-top-1">
            <div className="footer-logo">
              <img src={footerLogo} alt="" />
              <h1>E-Comm</h1>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </p>
          </div>
          <div className="footer-top-2">
            <h2>Follow Us</h2>
            <p>
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
            <div className="footer-top-icons">
              <FaFacebookF className="facebook" />
              <FaTwitter className="twitter" />
            </div>
          </div>
          <div className="footer-top-3">
            <h2>Contact Us</h2>
            <p>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
          </div>
        </div>
        <div className="footer-bottom">
          {FOOTER_LIST?.map((el) => (
            <ul className="footer-list" key={el.id}>
              <li className="footer-item">{el.title}</li>
              <li className="footer-item-1">{el.info}</li>
              <li className="footer-item-1">{el.info1}</li>
              <li className="footer-item-1">{el.info2}</li>
              <li className="footer-item-1">{el.info3}</li>
            </ul>
          ))}
        </div>
        <hr className="footer-hr" />
        <div className="footer-cards">
          <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
          <img src={cards} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
