import React from 'react';
import './Cursor.css';

const Cursor: React.FC = () => {

  const [cursor, setCursor] = React.useState<HTMLElement | any>()

  //   const cursor:any = document.getElementById('cursor')
  //   const cursorInner = setInnerElements();
  //   const hoverElements = Array.prototype.slice.call( document.querySelectorAll('[data-hover]') );

  //   React.useEffect(() => {
  //     setFollowCursor()
  //     setHoverListeners()
  //   })

  
  // const setInnerElements = () => {
  //   let cursorInner = document.createElement('span')
  //   cursorInner.id = 'cursor-inner'
  //   this.cursor.appendChild(cursorInner);

  //   let cursorPointer = document.createElement('span');
  //   cursorPointer.id = 'cursor-pointer'
  //   this.cursor.appendChild(cursorPointer);

  //   return cursorInner;
  // }

  // const setFollowCursor = () => {
  //   cursor.id = 'cursor'
  //   document.addEventListener('mousemove', (e) => {
  //     let transform = {transform: `translate(${e.clientX}px, ${e.clientY}px)`, opacity: '1'} 
  //     Object.assign(this.cursor.style, transform );
  //   })

  //   document.addEventListener('mouseleave', (e) => {
  //     Object.assign(this.cursor.style, {opacity: `0`}  );
  //   })
  // }
  
  // const setHoverListeners = () => {
  //   for (let ele of this.hoverElements) {
  //     ele.addEventListener('mouseover', (e) => {
  //       this.cursorInner.classList.add('reveal-cursor')
  //       this.cursorInner.innerHTML = e.target.dataset.hover
  //       Object.assign(this.cursor.childNodes[1].style, {opacity: `0`}  );
  //     })

  //     ele.addEventListener('mouseleave', (e) => {
  //       this.cursorInner.classList.remove('reveal-cursor')
  //       Object.assign(this.cursor.childNodes[1].style, {opacity: `1`}  );
  //     })
  //   }
  // }

  const setCursorIcon = () => {
    setCursor(document.getElementById('cursor'))
    
    document.addEventListener('mousemove', (e) => {
      if (cursor) {
        let transform = {transform: `translate(${e.clientX}px, ${e.clientY}px)`, opacity: '1'} 
        Object.assign(cursor.style, transform );
      }
    })
  }

  React.useEffect(() => {
    setCursorIcon()
  })

  return (
    <div id='cursor'>

      <div id="cursor-pointer"></div>

    </div>
  );
}

export default Cursor;
