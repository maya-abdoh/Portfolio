import React, { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const App = () => {
  const [activeSection, setActiveSection] = useState("About");

  const sections = {
    About: (
      <div>
        <h2>About Me</h2>
        <p>
          I am a passionate frontend developer skilled in React and Angular,
          with a focus on creating interactive, user-friendly web applications.
          Recently graduated with a degree in Software Engineering, I excel at
          delivering high-quality projects that prioritize performance,
          accessibility, and responsiveness. Always eager to embrace new
          technologies and best practices, I bring a problem-solving mindset
          and strong attention to detail.
        </p>
      </div>
    ),
    Projects: (
      <div>
        <h2>Projects</h2>
        <ul>
          <li>
            <a
              href="https://github.com/maya-abdoh/maya_abdoh-UTS2023/tree/main/Project-1/project"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ff6b6b", textDecoration: "none", fontWeight: "bold" }}
            >
              Intelligence Games
            </a>{" "}
            (2023/07 – 2023/08)
            <p>
              Developed interactive games using JavaScript and React, focusing
              on reusable components for standard game elements and win/lose
              scenarios.
            </p>
          </li>
          <li>
            <a
              href="https://github.com/samakhraim/PalEatsMobileApplication"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ff6b6b", textDecoration: "none", fontWeight: "bold" }}
            >
              PalEats
            </a>{" "}
            (2023/01 – 2023/05)
            <p>
              Created a mobile app using Xamarin.Forms and C#, exploring
              Palestinian recipes with Azure database integration.
            </p>
          </li>
          <li>
            <a
              href="https://github.com/maya-abdoh/ims-app/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ff6b6b", textDecoration: "none", fontWeight: "bold" }}
            >
              Inventory Management System
            </a>{" "}
            (2022/05 – 2022/05)
            <p>
              Built a web-based system with Node.js, Express.js, and MySQL for
              efficient inventory control.
            </p>
          </li>
        </ul>
      </div>
    ),
    
    Skills: (
      <div>
        <h2>Skills</h2>
        <p>
          Throughout my journey as a developer, I have honed my skills in a
          variety of programming languages, frameworks, and tools. These skills
          enable me to build scalable, efficient, and user-friendly applications
          while maintaining high standards of performance and accessibility.
        </p>
        <div className="skills-section">
          <div className="skills-category">
            <h3>Languages</h3>
            <p>C++, C#, JavaScript, Python, TypeScript, Java</p>
          </div>
          <div className="skills-category">
            <h3>Frameworks & Tools</h3>
            <p>React, Angular, Asp.net, Scala, HTML, CSS, PostgreSQL, Postman</p>
          </div>
        </div>
      </div>
    ),
    Experience: (
      <div>
        <h2>Professional Experience</h2>
        <div className="experience-item">
          <h3>Quartz Technologies</h3>
          <p>
            <strong>Full Stack</strong> (2024/02 – 2024/06, Nablus, Palestine)
          </p>
          <p>
            Learned to work with SQL, C#, and Angular during my training at
            Quartz, gained skills in database design, data management, and
            front-end/back-end integration, and developed expertise in
            real-time data handling using WebSocket.
          </p>
        </div>
        <div className="experience-item">
          <h3>Isra' Software & Computer Co</h3>
          <p>
            <strong>Front End Developer</strong> (2023/06 – 2023/08, Nablus,
            Palestine)
          </p>
          <p>
            Developed an interactive, fully responsive intelligence games web
            application using HTML, CSS, JavaScript, Bootstrap, and React.js,
            fostering team collaboration and enhancing user experience with an
            attractive design.
          </p>
        </div>
      </div>
    ),
  };

  return (
    <div className="portfolio">
      <div className="container">
        <div className="sidebar card">
          <div className="profile-pic">
            <img src="photo2.jpg" alt="Maya Husam Abdoh" />
          </div>
          <h2 className="name">Maya Husam Abdoh</h2>
          <p className="role">Frontend Developer</p>
          <div className="contact-info">
            <p>
              <FontAwesomeIcon icon={faPhone} /> +972 594310073
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> mayaabdoh2002@gmail.com
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Nablus, Palestine
            </p>
          </div>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        <div className="main-content">
          <div className="navigation">
            <button
              className={activeSection === "About" ? "active" : ""}
              onClick={() => setActiveSection("About")}
            >
              About Me
            </button>
            <button
              className={activeSection === "Projects" ? "active" : ""}
              onClick={() => setActiveSection("Projects")}
            >
              Projects
            </button>
            <button
              className={activeSection === "Skills" ? "active" : ""}
              onClick={() => setActiveSection("Skills")}
            >
              Skills
            </button>
            <button
              className={activeSection === "Experience" ? "active" : ""}
              onClick={() => setActiveSection("Experience")}
            >
              Professional Experience
            </button>
          </div>
          <div className="card dynamic-content">
            {sections[activeSection]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
