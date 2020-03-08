document.addEventListener('DOMContentLoaded', function() {
  imagesOnUnderlineTextHover();
  displayAbout();
  idleRandomDots(500);
  document.body.onmousemove = event => {idleRandomDots(500);}

});
