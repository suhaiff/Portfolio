import React, { useRef } from "react";
import { PiArrowSquareLeftDuotone } from "react-icons/pi";
import { PiArrowSquareRightDuotone } from "react-icons/pi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "../styles/Recentworks.css";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.jpg";

const recentProjects = [
  { id: 1, image: Project1, title: "Project One" },
  { id: 2, image: Project1, title: "Project Two" },
  { id: 3, image: Project1, title: "Project Three" },
  { id: 4, image: Project2, title: "Project Four" },
  { id: 5, image: Project2, title: "Project Four" },
  { id: 6, image: Project2, title: "Project Four" },
  { id: 7, image: Project2, title: "Project Four" },
  { id: 8, image: Project2, title: "Project Four" },
];

const RecentWorks = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 340; // Adjust depending on card size + margin

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="recent-works">
      <h2 className="section-title">Recent Works &nbsp; &#8595;</h2>
      <div className="slider">
        <button className="nav-arrow left" onClick={() => scroll("left")}>
          <PiArrowSquareLeftDuotone />
        </button>

        <div className="project-container" ref={scrollRef}>
          {recentProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <a href="#home" className="case-study">
                View Case Study &nbsp;<FaArrowUpRightFromSquare />
              </a>
            </div>
          ))}
        </div>

        <button className="nav-arrow right" onClick={() => scroll("right")}>
          <PiArrowSquareRightDuotone />
        </button>
      </div>
    </section>
  );
};

export default RecentWorks;
