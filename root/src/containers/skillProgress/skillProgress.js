import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import ReactIcon from "../../assets/svgs/ReactIcon.svg"
import GitIcon from "../../assets/svgs/GitIcon.svg"
import ServerIcon from "../../assets/svgs/ServerIcon.svg"

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="grid-item frontend">
            <img src={ReactIcon} alt="React Icon"/>
            <div>
              <p className="skill-type">Frontend</p>
              <p className="skill-list">React, Redux, Zustand, React-Query, Tailwind, Angular</p>
            </div>
          </div>
          <div className="grid-item version-control">
            <img src={GitIcon} alt="Git Icon"/>
            <div>
              <p className="skill-type">Version Control</p>
              <p className="skill-list">Git, GitHub</p>
            </div>
          </div>
          <div className="grid-item backend">
            <img src={ServerIcon} alt="Server Icon"/>
            <div>
              <p className="skill-type">Backend</p>
              <p className="skill-list">NodeJs, ExpressJs, Golang, PHP, Laravel</p>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
