import React from "react";
import { motion } from "framer-motion";
import { useProgress } from "@react-three/drei";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/Hero.css"; 

const Loader = () => {
  const { progress } = useProgress();
  return (
    <div style={{ color: "white", position: "absolute", top: 20, left: 20, zIndex: 10 }}>
      Loading... {Math.round(progress)}%
    </div>
  );
};

const Hero = () => {
  const { progress } = useProgress();

  return (
    <div className="hero-container" id="home">
      {progress < 100 && <Loader />}

      <section className="hero-section">
        <motion.h1
          className="hero-heading"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
           Passionate Frontend Developer
        </motion.h1>

        <motion.h2
          className="hero-subtitle"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Designer - UI Crafter - React Enthusiast
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          The mind behind clean code and creative interfaces. I build immersive web experiences with a <span>developer's brain</span> and a <span>designer's eye</span>.
        </motion.p>

        <motion.div
          className="hero-button-group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <a href="#projects" className="hero-button primary">View Projects</a>
          <a href="/Sohib_Resume.pdf" download className="hero-button secondary">Download Resume</a>
        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <a href="https://github.com/sohibakthar" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <div className="vertline"></div>
          <a href="https://linkedin.com/in/sohibakthar" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <div className="vertline"></div>
          <a href="mailto:your@email.com"><FaEnvelope /></a>
        </motion.div>
      </section>
      {/* Floating Words */}
      <motion.span
        className="floating-word"
        style={{ top: "20%", left: "20%" }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        Frontend
      </motion.span>

      <motion.span
        className="floating-word"
        style={{ top: "60%", left: "20%" }}
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        React.js
      </motion.span>

      <motion.span
        className="floating-word"
        style={{ top: "30%", right: "25%" }}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        UI/UX
      </motion.span>

      <motion.span
        className="floating-word"
        style={{ bottom: "10%", right: "25%" }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      >
        Python
      </motion.span>

    </div>
  );
};

export default Hero;
