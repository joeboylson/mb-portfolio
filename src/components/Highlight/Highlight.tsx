import React from 'react';
import './Highlight.css';

const Highlight: React.FC = (Props) => {
  
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
    <div data-highlight>
      {Props.children}
    </div>
  );
}

export default Highlight;
