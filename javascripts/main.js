window.addEventListener('DOMContentLoaded', (event) => {
  const cursor = new Cursor(); 
  const nav = new Nav();
  const highlight = new Highlight();

  nav.element.addEventListener('click', () => {
    nav.toggle()
  })

  const options = {
    rootMargin: '-200px 0px -200px 0px',
    threshold: 0.5
  }

  targets = document.querySelectorAll('[data-highlight]');

  observer = new IntersectionObserver((entries) => {

      entries.forEach(entry => {

          if(entry.intersectionRatio > 0.5) {
            entry.target.classList.add('in-viewport')
          }
          else {
            entry.target.classList.remove('in-viewport')
          }
      })

  }, options)

  targets.forEach(image => {
      observer.observe(image)
  })
});