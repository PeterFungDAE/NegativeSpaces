var idleState = false;
var idleWait = 2000;
var idleTimer = null;
var dots = [];


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function storeRandPos () {
  var xPos = getRandomInt(canvas.width);
  var yPos = getRandomInt(canvas.height);
  dots.push(xPos, yPos);
}

// function drawDot (xPos, yPos) {
//   var canvas = document.getElementById("canvas");
//   var context= canvas.getContext("2d");
//   context.canvas.width  = window.innerWidth;
//   context.canvas.height = window.innerHeight;
//   var radius = 10;

//   context.beginPath();
//   context.arc(xPos, yPos, radius, 0, Math.PI*2, false);
//   context.fillStyle = 'black';
//       context.fill();
//       context.lineWidth = 2;
//       context.strokeStyle = 'black';
//       context.stroke();
// }

// function drawDots () {
//   storeRandPos();
//   for(var i =0; i<dots.length; i+=2) {
//     drawDot(dots[i], dots[i+1]);
//   }
// }

// function resetDots() {
//   dots = [];
// }

function randDots (time) {
  clearTimeout(idleTimer);
  if(idleState == true) {
    drawDots();
  }
  idleState = false;
  idleTimer = setTimeout(function() {
    resetDots();
    idleState = true;
  }, time);

}

function debug(time) {
  clearTimeout(idleTimer);
  if (idleState == true) {
    document.body.style.backgroundColor = "white";
  }
  idleState = false;
  idleTimer = setTimeout(function() {
    document.body.style.backgroundColor = "black";
    idleState = true;
  }, time);
}




document.addEventListener('DOMContentLoaded', function() {

  //var idleTimer = setInterval (randDots(), 50);
  // var debug = window.setInterval(console.log("hi"));
  randDots(1000);
  document.body.onmousemove = event => {
    //resetDots();
    randDots(1000);
  }
});
