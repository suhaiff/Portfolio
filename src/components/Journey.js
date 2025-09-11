import React from "react";
import "../styles/Journey.css"; // adjust path if your CSS folder differs

const Journey = () => {
  const journeySteps = [
    {
      title: "Getting Started",
      description:
        "Began learning HTML theoretically, then stepped into CSS. Combined both to create small projects and simple web pages.",
    },
    {
      title: "First Portfolio",
      description:
        "Built my first personal portfolio using HTML & CSS in VS Code, gaining structural knowledge of websites.",
    },
    {
      title: "Exploring JavaScript",
      description:
        "Learned JavaScript to make websites dynamic and created small projects for practice.",
    },
    {
      title: "React Development",
      description:
        "Moved to React to build modern UIs and worked on small freelancing projects for friends and neighbors.",
    },
    {
      title: "Design & Creativity",
      description:
        "Started learning Blender and Figma and experimented with Three.js to bring 3D into websites.",
    },
    {
      title: "Towards Full-Stack",
      description:
        "Currently exploring backend development to become a Full-Stack Developer.",
    },
  ];

  return (
    <section className="journey">
      <h2 className="journey-title">📈 My Journey</h2>
      <div className="timeline">
        {journeySteps.map((step, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
