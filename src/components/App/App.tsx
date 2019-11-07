import React from 'react';
import './App.css';

import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import Cursor from '../Cursor/Cursor';
import CursorContext from './CursorContext';
import RouterContext from './RouterContext';

const App: React.FC = () => {

  const [mainPosition, setMainPosition] = React.useState('')

  const mainStyle = {
    transform: `translateX(${mainPosition})`
  } as React.CSSProperties;
  
  return (
    <div>
      <CursorContext>
        <RouterContext>

        <Nav setMainPosition={setMainPosition}/>
        <Main style={mainStyle}/>
        <Cursor />

        </RouterContext>
      </CursorContext>
    </div>
  );
}

export default App;
