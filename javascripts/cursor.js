class Cursor {
  constructor() {
    this.cursor = document.getElementById('cursor')
    this.cursorInner = this.setInnerElements();
    this.hoverElements = Array.prototype.slice.call( document.querySelectorAll('[data-hover]') );

    this.setFollowCursor()
    this.setHoverListeners(this.hoverElements)
  }


  
  setInnerElements () {
    let cursorInner = document.createElement('span')
    cursorInner.id = 'cursor-inner'
    this.cursor.appendChild(cursorInner);

    let cursorPointer = document.createElement('span');
    cursorPointer.id = 'cursor-pointer'
    this.cursor.appendChild(cursorPointer);

    return cursorInner;
  }



  setFollowCursor () {
    this.cursor.id = 'cursor'
    document.addEventListener('mousemove', (e) => {
      let transform = {transform: `translate(${e.clientX}px, ${e.clientY}px)`, opacity: '1'} 
      Object.assign(this.cursor.style, transform );
    })

    document.addEventListener('mouseleave', (e) => {
      let opacity = {opacity: `0`} 
      Object.assign(this.cursor.style, opacity );
    })
  }


  
  setHoverListeners (elements) {
    for (let ele of elements) {
      ele.addEventListener('mouseover', (e) => {
        this.cursorInner.classList.add('reveal-cursor')
        this.cursorInner.innerHTML = e.target.dataset.hover
      })

      ele.addEventListener('mouseleave', (e) => {
        this.cursorInner.classList.remove('reveal-cursor')
      })
    }
  }
}