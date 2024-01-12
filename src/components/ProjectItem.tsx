import React from "react";

interface Props{
    image: string;
    name: string;
}
function ProjectItem({ image, name} : Props) {
  return (
    <div className="projectItem">
      <div style={{backgroundImage: `url(${image})`}} className="bgImage"/>
      <h1 className="projName">{name}</h1>
    </div>
  );
}

export default ProjectItem;
