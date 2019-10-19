import React from 'react';
import './Project.css';
import { AppContext } from '../App/AppContext';

export interface ProjectProps {
  cursorText: string;
  image: string;
  index: number;
  themeColor: string;
  title?: string;
  info?: any;
  description?: string;
}

const Project: React.FC<ProjectProps> = (Props) => {

  const context: any = React.useContext(AppContext)

  const setCursorElement = context['setCursorElement']

  const [footerDelay, setFooterDelay] = React.useState(true);

  React.useEffect(() => {

    let timeout = setTimeout(() => {
      setFooterDelay(false)
      clearTimeout(timeout)
    }, 1500)

  }, [])

  const projectStyle = {
    flexDirection: `${(Props.index % 2) > 0   ? 'row-reverse' : 'row'}`
  } as React.CSSProperties;

  const projectImageStyle = {
    backgroundImage: `url("${Props.image}")`  
  } as React.CSSProperties;

  const projectFooterStyle = {
    transform: `${footerDelay ? 'scaleX(0)' : ''}`,
    backgroundColor: Props.themeColor
  } as React.CSSProperties;

  return (
    <div 
      className={'project'} 
      style={projectStyle}
      onMouseEnter={(e) => setCursorElement(<h2>{Props.cursorText}</h2>)}
      onMouseLeave={(e) => setCursorElement(null)}  
    >
      <div className={'project-image'} style={projectImageStyle}></div>
      <div className={'project-text'}>
        <h3 className={'title'}>{Props.title}</h3>
        <p className={'info'}>{Props.info}</p>
        <p className={'description'}>{Props.description}</p>
      </div>
      <div className={'project-footer'} style={projectFooterStyle}></div>

    </div>
  );
}

export default Project;
