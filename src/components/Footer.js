import React from "react";
import { FaInstagram, FaFacebookF, FaXTwitter, FaDiscord } from "react-icons/fa6";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding */}
        <div className="footer-branding">
          <h2 className="footer-logo">SA<span>Dev.</span></h2>
          <p className="footer-tagline">Frontend Developer | React & Web Design</p>
        </div>

        {/* Quick Nav */}
        <div className="footer-nav">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div className="footer-social">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/suhaif_akt/"><FaInstagram /></a>
            <a href="https://www.facebook.com/suhaif.akt01"><FaFacebookF /></a>
            <a href="https://x.com/Suhaifakt"><FaXTwitter /></a>
            <a href="https://canary.discord.com/channels/@me"><FaDiscord /></a>
          </div>
          <p className="contact-info"> suhaifakt01@gmail.com</p>
          <p className="contact-info"> +91 7708572382</p>
        </div>

        {/* Services */}
        <div className="footer-services">
          <h3>Services</h3>
          <p>Web Design</p>
          <p>React Development</p>
          <p>UI/UX Integration</p>
          <p>Responsive Frontend</p>
        </div>
      </div>

      {/* Closing Note */}
      <div className="footer-bottom">
        <p>© 2025 Sohib Akthar | Personal Portfolio | Crafted with passion & precision ☕ </p>
      </div>
    </footer>
  );
};

export default Footer;
