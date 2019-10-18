import React from 'react';
import './App.css';

import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import Cursor from '../Cursor/Cursor';

const App: React.FC = () => {
  return (
    <div>

      <Nav />
      <Main />
      <Cursor />

    </div>
  );
}

export default App;
