import React from "react";

interface Props {
  image: string;
  name: string;
  link?: string;
}
function ProjectItem({ image, name, link }: Props) {
  return (
    <a href={link}>
      <div className="projectItem">
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h1 className="projName">{name}</h1>
      </div>
    </a>
  );
}

export default ProjectItem;
