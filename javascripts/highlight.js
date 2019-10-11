class Highlight {
  constructor() {

    this.options = {
      rootMargin: '-200px 0px -200px 0px',
      threshold: 0.5
}
  
    this.targets = document.querySelectorAll('[data-highlight]');
  
    this.observer = new IntersectionObserver((entries) => {
  
        entries.forEach(entry => {
  
            if(entry.intersectionRatio > 0.5) {
              entry.target.classList.add('in-viewport')
            }
            else {
              entry.target.classList.remove('in-viewport')
            }
        })
  
    }, this.options)
  
    this.targets.forEach(el => {
        this.observer.observe(el)
    })

  }
}