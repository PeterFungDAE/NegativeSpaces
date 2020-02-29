var idleState = false;
var idleWait = 2000;
var idleTimer = null;


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


// function randDots (time) {
//   clearTimeout(idleTimer);
//   if(idleState == true) {
//     drawDots();
//   }
//   idleState = false;
//   idleTimer = setTimeout(function() {
//     resetDots();
//     idleState = true;
//   }, time);

// }

function debug(time) {
  clearTimeout(idleTimer);
  if (idleState == true) {
    // document.body.style.backgroundColor = "white";
    var iddleDots = document.querySelectorAll("div.iddleDot");
    iddleDots.forEach(element => element.parentNode.removeChild(element));
  }
  idleState = false;
  idleTimer = setTimeout(function() {

    createRandomDot();

    idleState = true;
  }, time);
}

function createRandomDot () {
  var xPos = getRandomInt(window.innerWidth);
  var yPos = getRandomInt(window.innerHeight);
  console.log(xPos);
  var elem = document.createElement("div");
  elem.className = "dot iddleDot";
  elem.style.position = "fixed";
  elem.style.top =  xPos + "px";
  elem.style.left =  yPos + "px";
  document.body.appendChild(elem);


}



document.addEventListener('DOMContentLoaded', function() {
  debug(2000);
  document.body.onmousemove = event => {
    debug(2000);
  }

});
