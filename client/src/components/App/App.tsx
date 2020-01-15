import React from 'react';
import './App.css';

import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import Cursor from '../Cursor/Cursor';
import CursorContext from './CursorContext';

// pages
import Home from '../Pages/Home';
import About from '../Pages/About';
import Reel from '../Pages/Reel';
import Illustration from '../Pages/Illustration'
import Photography from '../Pages/Photography'
import Contact from '../Pages/Contact'

// projects
import Localpost from '../Project/Localpost'
import Metro from '../Project/Metro'
import Veronica from '../Project/Veronica'
import SDA from '../Project/SDA'
import Roamio from '../Project/Roamio'
import Motion from '../Project/Motion'

const apiUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:5000' : ''

const routes:any = {
  home: { component: Home },
  about: { component: About },
  reel: { component: Reel },
  illustration: { component: Illustration },
  photography: { component: Photography },
  contact: { component: Contact },
  localpost: { component: Localpost, themeColor: '#E52354'},
  metro: { component: Metro, themeColor: '#d9dde0', dotColor: 'rgba(0, 0, 0, 0.1)' },
  veronica: { component: Veronica, themeColor: '#f0ddd1', dotColor: 'rgba(0, 0, 0, 0.1)' },
  sda: { component: SDA, themeColor: '#DFE1DF', dotColor: 'rgba(0, 0, 0, 0.1)' },
  roamio: { component: Roamio, themeColor: '#e33145'},
  motion: { component: Motion, themeColor: '#0a506a'}
}

const App: React.FC = () => {

  const getDefaultRoute = () => Object.keys(routes).includes( window.location.pathname.slice(1) ) ? window.location.pathname.slice(1) : 'home';

  const [mainPosition, setMainPosition] = React.useState('');
  const [route, setRoute] = React.useState( getDefaultRoute() );
  const Component = routes[route];

  // handling route forwards and backwards
  if (window.location.pathname.slice(1) !== route) {
    window.history.pushState(null, '', route);
  }
  window.onpopstate = () => { setRoute( getDefaultRoute() ) };

  React.useEffect(() => {
    let mainSpacer:any = document.getElementById('main-spacer');
    if (mainSpacer) mainSpacer.scrollIntoView();

    let root:any = document.documentElement;
    if (Component) {
      root.style.setProperty('--theme-color', `${Component.themeColor ? Component.themeColor : '#2B2D30'}`)
      root.style.setProperty('--dot-color', `${Component.dotColor ? Component.dotColor : 'rgba(255, 255, 255, 0.1)'}`)
    }
  }, [Component])

  const mainStyle = {
    transform: `translate${mainPosition} 0)`
  } as React.CSSProperties;
  
  return (
    <div id={'app'}>
      <CursorContext>
        <Nav setMainPosition={setMainPosition} setRoute={setRoute}/>
        <Main 
          style={mainStyle} 
          component={Component.component} 
          setRoute={setRoute}
        />
        <Cursor />
      </CursorContext>
    </div>
  );
}

export default App;
export { apiUrl }
