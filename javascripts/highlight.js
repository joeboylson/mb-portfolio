class Highlight {
  constructor() {
    this.root = document.getElementById('scroll-area');
    this.targets = document.querySelectorAll('[data-highlight]');

    this.options = {
      root: document.body,
      rootMargin: '0px',
      threshold: 0
    }
    
    this.observer = new IntersectionObserver(
      this.callback, 
      this.options
    );

    this.observeTargets();

  }

  callback = (entries, observer) => {
    entries.forEach(entry => {

      // console.log(entry)
      // Each entry describes an intersection change for one observed
      // target element:
      //   entry.boundingClientRect
      //   entry.intersectionRatio
      //   entry.intersectionRect
      //   entry.rootBounds
      //   entry.target
      //   entry.time
    });
  };

  observeTargets() {
    this.targets.forEach( target => {
      this.observer.observe(target)
    })
  }
}