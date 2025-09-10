import React from "react";
import "../styles/Project.css";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.jpg";
import Project3 from "../assets/project3.jpeg";
import Project4 from "../assets/project4.webp";
import Project5 from "../assets/project5.webp";
import Project6 from "../assets/project6.webp";
import Project7 from "../assets/project7.jpg";

const images = [
  { src: Project1, alt: "Project 1" },
  { src: Project2, alt: "Project 2" },
  { src: Project3, alt: "Project 3" },
  { src: Project4, alt: "Project 4" },
  { src: Project5, alt: "Project 5" },
  { src: Project6, alt: "Project 6" },
  { src: Project7, alt: "Project 7" },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h4 className="projects-title">- WELCOME TO MY <span>FORGE</span> -</h4> 
      {/* - WELCOME TO MY <span>FORGE</span> - */}
      <div className="masonry-grid">
        {images.map((img, index) => (
          <div className="masonry-item" key={index}>
            <img
              src={img.src}
              alt={img.alt}
              className="masonry-image"
            />
          </div>
        ))}
      </div>
      <div className="projectnav">
        <a href="#home" className="more">All Projects</a>
        <a href="#contact" className="contactbutton">Connect with me!</a>
      </div>
    </section>
  );
};

export default Projects;
