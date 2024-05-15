import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My name is Subh Dhungana</h2>
        <div className="prompt">
          <p>
            A software developer with a passion for creating awesome web
            application that everyone love.
          </p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS,  NPM, Next Js
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS,
               MongoDB, 
            </span>
          </li>
          <li className="item">
            <h2>Cyber Security</h2>
            <span>Penetration Testing, Vulnerability Assessment, Web App Sec Testing, Offensive WebAppSec Testing Tools</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
