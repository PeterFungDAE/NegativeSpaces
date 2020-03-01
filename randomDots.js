var idleState = false;
var idleTimer = null;
var headerDotHover = false;


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
  if(headerDotHover) {
    elem.style.backgroundColor =  "white";
  } else {
     elem.style.backgroundColor =  "black";
  }
  document.body.appendChild(elem);

}

function displayAbout (){
  var dotHeader = document.querySelectorAll("div.dotHeader");
  var about = document.getElementById('about');
  var dots = document.querySelectorAll("div.dot");
  dotHeader[1].addEventListener("mouseover", function( event ) {
    about.style.opacity = "1";
    dots.forEach(dot => dot.style.backgroundColor= "white");
    headerDotHover = true;
  });

  dotHeader[1].addEventListener("mouseout", function( event ) {
    about.style.opacity = "0";
    dots.forEach(dot => dot.style.backgroundColor= "black");
    headerDotHover = false;

    //circles = black
  });
}


document.addEventListener('DOMContentLoaded', function() {
  displayAbout();
  idleRandomDots(2000);
  document.body.onmousemove = event => {idleRandomDots(2000);}

});
