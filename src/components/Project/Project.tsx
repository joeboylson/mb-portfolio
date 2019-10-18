import React from 'react';
import './Project.css';

export interface ProjectProps {
  cursorText: string;
  image: string;
  index: number;
  title?: string;
  info?: string;
  description?: string;
}

const Project: React.FC<ProjectProps> = (Props) => {

  const projectImageStyle = {
    backgroundImage: `url("${Props.image}")`,
    height: '100px'
  } as React.CSSProperties;

  return (
    <div className={'project'}>
      <div className={'project-image'} style={projectImageStyle}></div>
        <div className={'project-text'}>
          <h1 className={'title'}>TITLE</h1>
          <p className={'info'}>Branding<br/>June 2019</p>
          <p className={'description'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam saepe, hic natus amet fuga animi illum accusamus possimus dolorum porro repellat est minima recusandae culpa officia ex iusto vitae eaque esse repudiandae!</p>
      </div>
    </div>
  );
}

export default Project;
