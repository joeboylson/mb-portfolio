class Nav {
  constructor() {
    this.nav = document.getElementById('nav');
    this.navToggle = document.getElementById('nav-toggle');
    this.open = false;

    this.toggleOne = document.getElementById('toggle-1')
    this.toggleTwo = document.getElementById('toggle-2')
    this.toggleThree = document.getElementById('toggle-3')

    this.navToggle.addEventListener('click', () => { this.toggle() })

    this.applyStyle();
  }

  toggle () {
    this.open = this.open ? false : true;
    this.applyStyle();
  }

  applyStyle() {

    if (this.open) {
      Object.assign(this.nav.style, {transform: `translateX(0)`} );

      this.toggleOne.classList.add('toggle-1-open')
      this.toggleTwo.classList.add('toggle-2-open')
      this.toggleThree.classList.add('toggle-3-open')
    }
    else {
      Object.assign(this.nav.style, {transform: `translateX(-90%)`}  );

      this.toggleOne.classList.remove('toggle-1-open')
      this.toggleTwo.classList.remove('toggle-2-open')
      this.toggleThree.classList.remove('toggle-3-open')
    }
    
  }

}