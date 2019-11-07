import React from 'react';
import './Highlight.css';

export interface HighlightProps {
  index: number;
  hoverOneProject: any
  setHoverOneProject: any;
  overrideHightlight: boolean;
}

const Highlight: React.FC<HighlightProps> = (Props) => {
  
  const options = {
    rootMargin: '-200px 0px -200px 0px',
    threshold: 0.5
  }

  const observer = new IntersectionObserver((entries) => {
    
    entries.forEach(entry => {
      
      if(entry.intersectionRatio > 0.5) {
        entry.target.classList.add('in-viewport')
      }
      else {
        entry.target.classList.remove('in-viewport')
      }
    })
    
  }, options)

  React.useEffect(() => {

    let targets = document.querySelectorAll('[data-highlight]');

    targets.forEach(el => {
      observer.observe(el)
    })

  }, [observer])

  return (
    <div
      data-highlight
      className={Props.hoverOneProject ? (Props.overrideHightlight ? 'override-highlight-hover' : 'override-highlight') : ''}
      onMouseEnter={(e) => Props.setHoverOneProject(Props.index)}
      onMouseLeave={(e) => Props.setHoverOneProject(null)}    
    >
      {Props.children}
    </div>
  );
}

export default Highlight;
