import React, { Dispatch, SetStateAction } from 'react';
import './Nav.css';
export interface NavProps {
  setMainPosition: Dispatch<SetStateAction<string>>
  setRoute: Dispatch<SetStateAction<string>>
}

const Nav: React.FC<NavProps> = (Props) => {

  const [navIsOpen, setNavIsOpen] = React.useState(false);
  Props.setMainPosition(navIsOpen ? '15%' : '0');
  
  const setRoute = (route:string) => {
    setNavIsOpen(false)
    Props.setRoute(route)
  }

  return (
    <div id="nav" className={navIsOpen ? 'nav-open' : ''}>

    <div id='sidebar'
    onMouseEnter={() => setNavIsOpen(!navIsOpen)}>
      <div 
        id='nav-toggle'
      >

        <span id='toggle-1' className={navIsOpen ? 'toggle-1-open' : ''}>
          <svg width="20" height="2">
            <polygon points="0,0 20,0 20,2 0,2"/>
          </svg>
        </span>

        <span id='toggle-2' className={navIsOpen ? 'toggle-2-open' : ''}>
          <svg width="20" height="2">
            <polygon points="0,0 20,0 20,2 0,2"/>
          </svg>
        </span>

        <span id='toggle-3' className={navIsOpen ? 'toggle-3-open' : ''}>
          <svg width="20" height="2">
            <polygon points="0,0 20,0 20,2 0,2"/>
          </svg>
        </span>

      </div>
      <h2 
        id={'toggle-text'}
        onClick={() => setRoute('home')}
      >Matt Boylson</h2>
    </div>

    <div id='nav-links'>
      <h2 onClick={() => setRoute('home')}>HOME</h2>
      <h2 onClick={() => setRoute('about')}>ABOUT</h2>
      <h2 onClick={() => setRoute('reel')}>REEL</h2>
      <h2 onClick={() => setRoute('illustration')}>ILLUSTRATION</h2>
      <h2 onClick={() => setRoute('photography')}>PHOTOGRAPHY</h2>
      <h2 onClick={() => setRoute('contact')}>CONTACT</h2>
    </div>

  </div>
  );
}

export default Nav;
