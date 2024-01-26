import React from 'react';
import ProjectItem from "../components/ProjectItem";
import TicTacToe from "../assets/TicTacToe.png";
import projcs from "../assets/proj99.png";

function Projects() {
  const link = "https://tic-tac-toe-ag.netlify.app/";
  return (
    <div className="projects">
      <h1 className="projTitle"> My Personal Projects</h1>
        <div className="projectList">
          <ProjectItem name="Tic-Tac-Toe (Multiplayer!)" image={TicTacToe} link={link}/>
          <ProjectItem name="Coming Soon" image={projcs}/>
          <ProjectItem name="Coming Soon" image={projcs}/>
        </div>
    </div>
  )
}

export default Projects;