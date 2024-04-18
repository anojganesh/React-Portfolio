import React from 'react';
import ProjectItem from "../components/ProjectItem";
import TicTacToe from "../assets/TicTacToe.png";
import projcs from "../assets/proj99.png";
import ClubFinance from "../assets/ClubFinancials.png";

function Projects() {
  const link1 = "https://tic-tac-toe-ag-0e9ceb6142d0.herokuapp.com/";
  const link2 = "https://clublog-1ded3cf35f1d.herokuapp.com/";
  return (
    <div className="projects">
      <h1 className="projTitle"> My Personal Projects</h1>
        <div className="projectList">
          <ProjectItem name="Tic-Tac-Toe (Multiplayer!)" image={TicTacToe} link={link1}/>
          <ProjectItem name="Club Financial Log" image={ClubFinance} link={link2}/>
          <ProjectItem name="Coming Soon" image={projcs}/>
        </div>
    </div>
  )
}

export default Projects;