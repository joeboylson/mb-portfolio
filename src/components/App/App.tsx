import React from 'react';
import './App.css';

import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import Cursor from '../Cursor/Cursor';
import AppContext from './AppContext';

const App: React.FC = () => {

  const [mainPosition, setMainPosition] = React.useState('')

  const mainStyle = {
    transform: `translateX(${mainPosition})`
  } as React.CSSProperties;
  
  return (
    <div>
      <AppContext>

        <Nav setMainPosition={setMainPosition}/>
        <Main style={mainStyle}/>
        <Cursor />

      </AppContext>
    </div>
  );
}

export default App;
