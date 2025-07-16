import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import ReactIcon from "../../assets/svgs/ReactIcon.svg"
import GitIcon from "../../assets/svgs/GitIcon.svg"
import ServerIcon from "../../assets/svgs/ServerIcon.svg"
import DatabaseIcon from "../../assets/svgs/DatabaseIcon.svg"
import CloudIcon from "../../assets/svgs/CloudIcon.svg"

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="main">
          <h1 className="skills-heading">Proficiency</h1>
          <div className="skills-container">
            <div className="grid-item frontend">
              <img src={ReactIcon} alt="React Icon"/>
              <div className="skill">
                <p className="skill-type">Frontend</p>
                <p className="skill-list">React, Redux, Zustand, React-Query, Tailwind, Angular</p>
              </div>
            </div>
            <div className="grid-item version-control">
              <img src={GitIcon} alt="Git Icon"/>
              <div className="skill">
                <p className="skill-type">Version Control</p>
                <p className="skill-list">Git, GitHub</p>
              </div>
            </div>
            <div className="grid-item backend">
              <img src={ServerIcon} alt="Server Icon"/>
              <div className="skill">
                <p className="skill-type">Backend</p>
                <p className="skill-list">NodeJs, ExpressJs, Golang, PHP, Laravel, GraphQL, NestJs</p>
              </div>
            </div>
            <div className="grid-item database">
              <img src={DatabaseIcon} alt="Database Icon"/>
              <div className="skill">
                <p className="skill-type">Databases</p>
                <p className="skill-list">MySQL, MongoDB, Postgres, SQL server</p>
              </div>
            </div>
            <div className="grid-item cloud">
              <img src={CloudIcon} alt="Cloud Icon"/>
              <div className="skill">
                <p className="skill-type">Cloud</p>
                <p className="skill-list">AWS (EC2, S3, RDS), Azure (Virtual Machine, Azure Data Studio)</p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
