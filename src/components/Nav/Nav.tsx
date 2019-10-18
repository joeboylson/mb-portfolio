import React from 'react';
import './Nav.css';

const Nav: React.FC = () => {

  const [navIsOpen, setNavIsOpen] = React.useState(false);

  return (
    <div id="nav" className={navIsOpen ? 'nav-open' : ''}>

    <div id='sidebar'>
      <div 
        id='nav-toggle' 
        onClick={() => setNavIsOpen(!navIsOpen)}
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
    </div>

    <div id='nav-links'>
      <a href="http://google.com">HOME</a>
      <a href="http://google.com">DESIGN</a>
      <a href="http://google.com">ILLUSTRATION</a>
      <a href="http://google.com">PHOTOGRAPHY</a>
      <a href="http://google.com">CONTACT</a>
    </div>

  </div>
  );
}

export default Nav;
