import React from "react";
import "../styles/Values.css";

const values = [
  {
    icon: "💡",
    title: "Problem Solving",
    desc: "I enjoy breaking down complex challenges into simple and effective solutions.",
  },
  {
    icon: "🎨",
    title: "User Experience",
    desc: "I prioritize smooth, intuitive, and enjoyable experiences for users.",
  },
  {
    icon: "⚡",
    title: "Attention to Detail",
    desc: "Small details matter — from typography to smooth animations.",
  },
  {
    icon: "🌍",
    title: "Accessibility",
    desc: "I aim to create inclusive experiences that are usable by everyone.",
  },
  {
    icon: "🚀",
    title: "Continuous Learning",
    desc: "I’m always exploring new technologies to improve my skills.",
  },
  {
    icon: "🤝",
    title: "Collaboration",
    desc: "I value teamwork and open communication to achieve better results.",
  },
];

const Values = () => {
  return (
    <section className="values-section">
      <h2 className="values-title">What I Value</h2>
      <p className="values-subtitle">
        These are the principles that guide my work and growth as a developer.
      </p>

      <div className="values-timeline">
        {values.map((item, index) => {
          // Assign row classes for pyramid size
          let rowClass = "";
          if (index < 2) rowClass = "row1";
          else if (index < 4) rowClass = "row2";
          else rowClass = "row3";

          // Assign left/right zigzag
          const sideClass = index % 2 === 0 ? "left" : "right";

          return (
            <div key={index} className={`value-card ${rowClass} ${sideClass}`}>
              <div className="value-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Values;
