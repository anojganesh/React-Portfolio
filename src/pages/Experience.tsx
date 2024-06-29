import React from "react";
import "react-vertical-timeline-component/style.min.css"; // Import the styles
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import schoolIcon from "../assets/school-9 (1).svg";
import briefcaseIcon from "../assets/noun-briefcase.svg";
function Experience() {
  return (
    <div className="experience">
      
      <VerticalTimeline lineColor="#4289fcb4">
        <div className="canvas">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2023 – Present"
            iconStyle={{ background: "rgb(250, 247, 168)", color: "#fff" }}
            icon={
              <img
                src={briefcaseIcon}
                className="briefcaseIcon"
                alt="schoolIcon"
              ></img>
            }
          >
            <h5 className="expTitle">
              Current - IT Assistant - Toronto Metropolitan University
              (School of ECS), Toronto, ON
            </h5>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2023"
            iconStyle={{ background: "rgb(250, 247, 168)", color: "#fff" }}
            icon={
              <img
                src={briefcaseIcon}
                className="briefcaseIcon"
                alt="schoolIcon"
              ></img>
            }
          >
            <h5 className="expTitle">
              Data Analyst Intern - ATS Software, Scarborough, ON
            </h5>
          </VerticalTimelineElement>
          
          
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2022 – 2027"
            iconStyle={{ background: "rgb(6, 137, 252)", color: "#fff" }}
            icon={
              <img
                src={schoolIcon}
                className="schoolIcon"
                alt="schoolIcon"
              ></img>
            }
          >
            <h5 className="expTitle">
              Current - Toronto Metropolitan University (Formerly Ryerson),
              Toronto, ON
            </h5>
            <h6>Computer Science (BSc (Hons)) (Co-Op)</h6>
            <p className="experience-note">Michael Julien Jr. Award</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2018 – 2022"
            iconStyle={{ background: "rgb(6, 137, 252)", color: "#fff" }}
            icon={
              <img
                src={schoolIcon}
                className="schoolIcon"
                alt="schoolIcon"
              ></img>
            }
          >
            <h5 className="expTitle">
              St. John Paul II Catholic Secondary School, Scarborough, ON
            </h5>
            <p>High School Diploma, Honors</p>
          </VerticalTimelineElement>
          <br></br>
        </div>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
