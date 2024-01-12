import React from 'react';
import ProjectItem from "../components/ProjectItem";
import projcs from "../assets/proj99.png";

function Projects() {
  return (
    <div className="projects">
      <h1 className="projTitle"> My Personal Projects</h1>
        <div className="projectList">
          <ProjectItem name="Project 1" image={projcs}/>
          <ProjectItem name="Coming Soon" image={projcs}/>
          <ProjectItem name="Coming Soon" image={projcs}/>
        </div>
    </div>
  )
}

export default Projects;