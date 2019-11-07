import React from 'react';
import './Cursor.css';
import { CursorContext } from '../App/CursorContext';

const Cursor: React.FC = () => {

  const [cursor, setCursor] = React.useState<HTMLElement | any>()

  const context: any = React.useContext(CursorContext)
  const cursorElement = context['cursorElement']

  const setCursorPosition = () => {
    setCursor(document.getElementById('cursor'))
    
    document.addEventListener('mousemove', (e) => {
      if (cursor) {
        let transform = {transform: `translate(${e.clientX}px, ${e.clientY}px)`, opacity: '1'} 
        Object.assign(cursor.style, transform );
      }
    })
  }

  React.useEffect(() => {
    setCursorPosition()
  })

  return (
    <div id='cursor'>


      {/* { cursorElement ? (
        <div id="cursor-element">
          { cursorElement }
        </div>
      ) : (
        <div id="cursor-pointer"></div>
      ) } */}

      {/* ----- */}

      {/* { cursorElement &&
        <div id="cursor-element">
          { cursorElement }
        </div> } */}

      {/* <div id="cursor-pointer"></div> */}

      {/* ----- */}

        <div id="cursor-pointer" style={{opacity: `${cursorElement ? 0 : 1}`}}></div>
        <div id="cursor-element" style={{opacity: `${cursorElement ? 1 : 0}`}}> { cursorElement } </div>
    </div>
  );
}

export default Cursor;
