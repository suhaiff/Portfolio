import React from 'react';
import "../styles/Services.css";
import serviceImage from "../assets/img-services.jpg"; 
import { FaPaintBrush, FaSearch, FaPenNib } from 'react-icons/fa';
import { IoCubeSharp } from "react-icons/io5";

import {ReactComponent as HtmlLogo} from "../assets/morquee/html-1.svg"
import {ReactComponent as CssLogo} from "../assets/morquee/css.svg"
import {ReactComponent as JsLogo} from "../assets/morquee/javascript.svg"
import {ReactComponent as ReactLogo} from "../assets/morquee/react.svg"
import {ReactComponent as PythonLogo} from "../assets/morquee/python.svg"
import {ReactComponent as BlenderLogo} from "../assets/morquee/blender.svg"
import {ReactComponent as FigmaLogo} from "../assets/morquee/figma.svg"
import {ReactComponent as TailwindLogo} from "../assets/morquee/tailwind.svg"
import {ReactComponent as GitLogo} from "../assets/morquee/git.svg"
import {ReactComponent as GithubLogo} from "../assets/morquee/github.svg"
import {ReactComponent as VscodeLogo} from "../assets/morquee/vscode.svg"


function Services() {
  const tags = ["Web Development", "Web Design", "Landing Page", "Creative Design", "Business site", "Portfolio", "3D Models"];
  const services = [
    { icon: <IoCubeSharp />, title: "Performance Optimization", description: "I optimize websites for speed, responsiveness, and efficiency to ensure a seamless experience across all devices." },
    { icon: <FaPaintBrush />,title: "UI/UX Implementation", description: "I transform design concepts and wireframes into fully functional, pixel-perfect websites that match the intended user experience." },
    { icon: <FaSearch />,title: "Maintenance & Support", description: "I provide ongoing support, bug fixes, and improvements to keep your website secure, updated, and running smoothly." },
    { icon: <FaPenNib />,title: "Interactive Animations", description: "I create smooth transitions, engaging animations, and micro-interactions to make websites more dynamic and user-friendly." }
  ];

  // const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git", "GitHub", "Responsive Design"];
  // const works = ["Portfolio", "Logo Creation", "Web Design", "UI Design", "Landing Page", "Business Site"];

  return (
    <section id="services" className="services-section">
      {/* --- First Row --- */}
      <div className="row first-row">
        <div className="column text-content">
          <h2>Services</h2>
          <p>Personable and adaptable customer service professional with a track record of exceeding client satisfaction goals. Skilled at active listening, clear communication, and creative problem-solving to deliver tailored solutions.</p>
          <hr className='line'/>
          <div className="tags">
            {tags.map((tag, i) => (
              <span className="tag" key={i}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="column image-content">
          <img src={serviceImage} alt="My Services" />
        </div>
      </div>

      {/* --- Second Row --- */}
      <div className="row second-row">
        {services.map((service, i) => (
          <div className="service-card" key={i}>
            <div className="card-title">
              <span className="card-icon">{service.icon}</span>
              <h3>{service.title}</h3> 
            </div>
            <hr />
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      

      <div className='body'>
        <div className="scroll-container">
          <div className="scroll-content">
            
            <HtmlLogo className= "logos"/>
            <CssLogo className= "logos"/>
            <JsLogo className= "logos"/>
            <ReactLogo className= "logos"/>
            <PythonLogo className= "logos"/>
            <BlenderLogo className= "logos"/>
            <FigmaLogo className= "logos"/>
            <TailwindLogo className= "logos"/>
            <GitLogo className= "logos"/>
            <GithubLogo className= "logos"/>
            <VscodeLogo className= "logos"/>

            <HtmlLogo className= "logos"/>
            <CssLogo className= "logos"/>
            <JsLogo className= "logos"/>
            <ReactLogo className= "logos"/>
            <PythonLogo className= "logos"/>
            <BlenderLogo className= "logos"/>
            <FigmaLogo className= "logos"/>
            <TailwindLogo className= "logos"/>
            <GitLogo className= "logos"/>
            <GithubLogo className= "logos"/>
            <VscodeLogo className= "logos"/>
          </div>
        </div>
      </div>

      <div className='body'>
        <div className="scroll-container_two">
          <div className="scroll-content_two">
            <span><i class="fa-solid fa-code"></i>&nbsp;Frontend Development</span> 
            <span><i class="fa-solid fa-palette"></i>&nbsp;UI/UX Design</span>
            <span><i class="fa-solid fa-bolt"></i>&nbsp;Fast Performance</span>
            <span><i class="fa-solid fa-mobile"></i>&nbsp;Responsive Design</span>
            <span><i class="fa-solid fa-lock"></i>&nbsp;Clean Code</span>
            <span><i class="fa-solid fa-rocket"></i>&nbsp;Deployment</span>
            <span><i class="fa-solid fa-handshake"></i>&nbsp;Collaboration</span>
            <span><i class="fa-solid fa-folder-open"></i>&nbsp;Project Management</span>

            <span><i class="fa-solid fa-code"></i>&nbsp;Frontend Development</span>
            <span><i class="fa-solid fa-palette"></i>&nbsp;UI/UX Design</span>
            <span><i class="fa-solid fa-bolt"></i>&nbsp;Fast Performance</span>
            <span><i class="fa-solid fa-mobile"></i>&nbsp;Responsive Design</span>
            <span><i class="fa-solid fa-lock"></i>&nbsp;Clean Code</span>
            <span><i class="fa-solid fa-rocket"></i>&nbsp;Deployment</span>
            <span><i class="fa-solid fa-handshake"></i>&nbsp;Collaboration</span>
            <span><i class="fa-solid fa-folder-open"></i>&nbsp;Project Management</span>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Services;
