import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    {/* <Newsletter /> */}
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">4 Herschel Road, Sterkspruit, 9762</p>
        <br />
        <p className="p__opensans">+27 76-123-4567</p>
        <p className="p__opensans">+27 76-123-4567</p>
      </div>
      <div className="app__footer-links_logo">
        {/* <img src={images.logo01} alt="footer_logo" /> */}
        <h1 className="app__footer-headtext">Groove Avenue</h1>
        <p className="p__opensans">
          "Be happy. Do anything, but let it produce joy”
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FiFacebook /></a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FiTwitter /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FiInstagram /></a>
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday:</p>
        <p className="p__opensans">08:00am - 12:00am</p>
        <p className="p__opensans">Saturday - Sunday:</p>
        <p className="p__opensans">07:00am - 11:00pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">
        {`${new Date().getFullYear()}`} Groove Avenue. All Rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
