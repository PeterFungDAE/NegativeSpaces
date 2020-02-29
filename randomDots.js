// var idleTimer;
// var idleState = false;
// var idleWait = 2000;


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randomDots () {
  var canvas = document.getElementById("canvas");
  var context= canvas.getContext("2d");
  context.canvas.width  = window.innerWidth;
  context.canvas.height = window.innerHeight;
  var radius = 10;

  var xPos = getRandomInt(canvas.width);
  var yPos = getRandomInt(canvas.height);
  context.beginPath();
  context.arc(xPos, yPos, radius, 0, Math.PI*2, false);
  context.fillStyle = 'black';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
    // point(xPos, yPos, canvas);
}

// function point(x, y, canvas){
//   canvas.beginPath();
//   canvas.arc(x, y, 1, 0, 2 * Math.PI, true);
//   canvas.stroke();
// }


// startTimer();
// element.onmousemove = stopTimer();

document.addEventListener('DOMContentLoaded', function() {
  var idleTimer = setTimeout(randomDots, 5000);
  body.onmousemove(clearTimeout(idleTimer));
});
