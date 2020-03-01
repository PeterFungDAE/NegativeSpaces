var idleState = false;
var idleTimer = null;


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function idleRandomDots(time) {
  clearInterval(idleTimer);
  if (idleState == true) {
    var iddleDots = document.querySelectorAll("div.iddleDot");
    iddleDots.forEach(element => element.parentNode.removeChild(element));
  }
  idleState = false;
  idleTimer = setInterval(function() {
    createRandomDot();
    idleState = true;
  }, time);
}

function createRandomDot () {

  var xPos = getRandomInt(window.innerWidth);
  var yPos = getRandomInt(window.innerHeight);
  var elem = document.createElement("div");
  elem.className = "dot iddleDot";
  elem.style.position = "fixed";
  elem.style.top =  xPos + "px";
  elem.style.left =  yPos + "px";
  document.body.appendChild(elem);

}

document.addEventListener('DOMContentLoaded', function() {

  idleRandomDots(1000);
  document.body.onmousemove = event => {idleRandomDots(500);}

});
