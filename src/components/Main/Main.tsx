import React from 'react';
import './Main.css';
import '../Pages/Pages.css';
import { RouterContext } from '../App/RouterContext';

// pages
import Home from '../Pages/Home';
import About from '../Pages/About';
import Design from '../Pages/Design';
import Illustration from '../Pages/Illustration'
import Photography from '../Pages/Photography'
import Contact from '../Pages/Contact'

// projects
import Localpost from '../Project/Localpost'

export interface MainProps {
  style: React.CSSProperties
}

const Main: React.FC<MainProps> = (Props) => {

  const context: any = React.useContext(RouterContext);
  
  const pages = [
    { route: 'home', component: Home},
    { route: 'about', component: About},
    { route: 'design', component: Design},
    { route: 'illustration', component: Illustration},
    { route: 'photography', component: Photography},
    { route: 'contact', component: Contact},
    { route: 'localpost', component: Localpost, themeColor: 'red'},
  ]

  const Component:any = pages.find((page:any) => page.route === context['route'])

  React.useEffect(() => {

    let root:any = document.documentElement;
    root.style.setProperty('--theme-color', `${Component.themeColor || 'black'}`)

  }, [Component.themeColor])

  return (
    <div id='main' style={Props.style}>
      <div id="grid">

        { Component && <Component.component/>}

      </div>
    </div>
  );
}

export default Main;