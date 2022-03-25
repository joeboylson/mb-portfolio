import React, { useMemo } from 'react';
import './Project.css';
import { CursorContext } from '../App/CursorContext';

export interface ProjectProps {
  route: string;
  cursorText: string;
  image: string;
  index: number;
  themeColor: string;
  title?: string;
  info?: any;
  description?: string;
  setRoute: any;
}

const Project: React.FC<ProjectProps> = (Props) => {

  const {
    route,
    cursorText,
    image,
    index,
    title,
    info,
    description,
    themeColor,
    setRoute,
  } = Props

  // cursor
  const cursorContext: any = React.useContext(CursorContext)
  const setCursorElement = cursorContext['setCursorElement']
  const [footerDelay, setFooterDelay] = React.useState(true);

  React.useEffect(() => {
    let timeout = setTimeout(() => {
      setFooterDelay(false)
      clearTimeout(timeout)
    }, 1500)
  }, [])

  const navigate = (route:string) => {
    setCursorElement(null)
    setRoute(route)
  }

  const projectStyle = {
    flexDirection: `${(index % 2) > 0   ? 'row-reverse' : 'row'}`,
    "--delay": `${index/5}s`
  } as React.CSSProperties;

  const projectImageStyle = {
    backgroundImage: `url("${image}")`,
    transitionDelay: `${index}s`
  } as React.CSSProperties;

  const projectFooterStyle = {
    transform: `${footerDelay ? 'scaleX(0)' : ''}`,
    backgroundColor: themeColor
  } as React.CSSProperties;

  const descriptionClassName = useMemo(() => {
    if (!info) return "description full-width";
    return "description";
  }, [info])

  return (
    <div 
      className={'project'} 
      style={projectStyle}
      data-highlight
      onClick={() => navigate(route)}
    >

      <div 
        className={'project-image'} 
        style={projectImageStyle}
        onMouseEnter={(e) => setCursorElement(<h2>{cursorText}</h2>)}
        onMouseLeave={(e) => setCursorElement(null)}
      ></div>
      <div className={'project-text'}>
        <h3 className={'title'}>{title}</h3>
        
        { info && <p className={'info'}>{info}</p> }
        <p className={descriptionClassName}>{description}</p>
      </div>
      <div className={'project-footer'} style={projectFooterStyle}></div>

    </div>
  );
}

export default Project;
