window.addEventListener('DOMContentLoaded', (event) => {
  const cursor = new Cursor(); 
  const nav = new Nav();
  const highlight = new Highlight();

  let projectImages = document.querySelectorAll('[data-image]');

  projectImages.forEach(element => {
    Object.assign(element.style, {backgroundImage: `url(${element.dataset.image})`});
  });

});