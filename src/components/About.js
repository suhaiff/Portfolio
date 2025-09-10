import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";
import profileImg from "../assets/profile.jpg";

const About = () => {
  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-image"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src={profileImg} alt="Sohib Akthar" />
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Meet Sohib</h2>
        <h3>Developer</h3>
        <p>
          I’m Sohib Akthar, a passionate Frontend Developer who loves crafting
          beautiful and performant user experiences. I specialize in building
          responsive, animated interfaces using modern tools like React, Framer
          Motion, and Tailwind CSS.
        </p>
        <hr className="line"/>
        <div className="about-tags">
            <span>HTML/CSS</span>
            <span>Tailwind CSS</span>
            <span>Javascript</span>
            <span>React.js</span>
            <span>Blender</span>
            <span>Three.js</span>
            <span>Figma</span>
            <span>Python</span>
        </div>
        <hr className="line"/>
        <div className="experience">
            <div className="grid1">
                <p>Freelance</p>
                <p>Freelance</p>
                <p>Freelance</p>
            </div>
            <div className="grid2">
                <p>Frontend Developer</p>
                <p>3d Modelor</p>
                <p>Web Developer</p>
            </div>
            <div className="grid3">
                <p>present</p>
                <p>2023-present</p>
                <p>2022-present</p>
            </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
