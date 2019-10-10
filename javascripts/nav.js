class Nav {
  constructor() {
    this.element = document.getElementById('nav');
    this.open = false;
  }

  toggle () {
    this.open = this.open ? false : true;
    this.applyStyle();
  }

  applyStyle() {
    let transform = {transform: `translateX(${ this.open ? '0' : 'calc(-90%)'})`} 
    Object.assign(this.element.style, transform );
  }

}