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
  var yPos = getRandomInt(window.innerHeight*2);
  var elem = document.createElement("div");
  elem.className = "dot iddleDot";
  elem.style.position = "fixed";
  elem.style.top =  xPos + "px";
  elem.style.left =  yPos + "px";
  if(headerDotHover) {
    elem.style.backgroundColor =  "#cfd6de";
  } else {
     elem.style.backgroundColor =  "black";
  }

  document.body.appendChild(elem);
}

function headerDotHoverAbout(dot) {
  var about = document.getElementById('about');
  var dots = document.querySelectorAll("div.dot");

  dot.addEventListener("mouseover", function( event ) {
    about.style.display = "block";
    document.body.style.backgroundColor = "black";
    dots.forEach(dot => dot.style.backgroundColor= "#cfd6de");
    headerDotHover = true;
  });
  dot.addEventListener("mouseout", function( event ) {
    about.style.display = "none";
    dots.forEach(dot => dot.style.backgroundColor= "black");
    document.body.style.backgroundColor = "#cfd6de";
    headerDotHover = false;
  });

}

function displayAbout (){
  var dotHeader = document.querySelectorAll("div.dotHeader");
  headerDotHoverAbout(dotHeader[0]);
  headerDotHoverAbout(dotHeader[1]);
}

