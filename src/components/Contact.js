import React from "react";
import "../styles/Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title"> 🔗 &nbsp;Let's Connect &nbsp;!</h2>
      <p className="contact-subtext">~ Open for Oppertunities and Collaborations.</p>
      <div className="contact-container">
        {/* Left Side - Info */}
        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h4>Address</h4>
              <p>Mettupalayam, Coimbatore - 641301</p>
            </div>
          </div>

          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <div>
              <h4>Mobile</h4>
              <p>+91 7708572382</p>
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h4>Email</h4>
              <p>suhaifakt01@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
