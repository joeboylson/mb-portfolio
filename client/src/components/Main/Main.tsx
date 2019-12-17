import React from 'react';
import './Main.css';
import '../Pages/Pages.css';

export interface MainProps {
  style: React.CSSProperties;
  component: any;
}

const Main: React.FC<MainProps> = (Props) => {

  const Component = Props.component

  return (
    <div id='main' style={Props.style}>
      <div id="grid">
        <Component />
      </div>
    </div>
  );
}

export default Main;