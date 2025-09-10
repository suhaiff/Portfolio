import React from "react";
import { motion } from "framer-motion";
import { FaMouse } from "react-icons/fa";
import "../styles/ScrollHint.css";

const ScrollHint = () => {
  return (
    <div className="scroll-hint-container">
      <span className="scroll-text">scroll down</span>

      <div className="line-container">
        <span className="horizontal-line" />
        <motion.div
          className="mouse-icon"
          initial={{ y: -3 }}
          animate={{ y: 5 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <FaMouse />
        </motion.div>
        <span className="horizontal-line" />
      </div>

      <span className="scroll-text">for projects</span>
    </div>
  );
};

export default ScrollHint;
