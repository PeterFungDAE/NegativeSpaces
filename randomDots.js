var idleState = false;
var idleTimer = null;
var headerDotHover = false;


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function idleRandomDots(time) {
    console.log("idleRandomDots")
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

function createRandomDot() {
    console.log("createRandomDot")
    var xPos = getRandomInt(window.innerWidth);
    var yPos = getRandomInt(window.innerHeight * 2);
    var elem = document.createElement("div");
    elem.className = "dot iddleDot";
    elem.style.position = "fixed";
    elem.style.top = xPos + "px";
    elem.style.left = yPos + "px";
    if (headerDotHover) {
        elem.style.backgroundColor = "#cfd6de";

    } else {
        elem.style.backgroundColor = "black";
        document.body.appendChild(elem);
    }

}



function displayAbout() {
    var about = document.getElementById('about');
    var dotHeader = document.querySelectorAll("div.dotHeader");
    var dot0 = dotHeader[0]
        //var dot1 = dotHeader[1]
    dot0.style.left = getRandomInt(window.innerWidth / 2) + "px";
    dot0.style.top = getRandomInt(window.innerHeight - 50) + "px";
    console.log("inner height " + window.innerHeight, "innerwidth " + window.innerWidth);
    // dot1.style.top = getRandomInt(50, window.innerHeight - 50) + "px";
    //dot1.style.left = getRandomInt(50, window.innerWidth / 2) + "px";
    // console.log("dot0:" + dot0.style.top, dot0.style.left + "dot1:" + dot1.style.top, dot1.style.left)
    // console.log("innerheight" + window.innerHeight);
    var dots = document.querySelectorAll("div.dot");
    var click = 0;

    dot0.addEventListener("click", function(event) {
        if (click > 0) {


            console.log("re-clicked")
            about.style.display = "none";
            document.body.style.backgroundColor = "#cfd6de";
            headerDotHover = false;
            aboutActive = false;
            // dot1.style.backgroundColor = "black";
            dot0.style.backgroundColor = "black";
            dots.forEach(dot => dot.style.backgroundColor = "black");
            click = 0;
        } else {
            click++
            about.style.display = "block"
            console.log("clicked")

            about.style.backgroundColor = "black";
            document.body.style.backgroundColor = "black";

            dots.forEach(dot => dot.style.backgroundColor = "#cfd6de");
            headerDotHover = true;
            aboutActive = true;
        }
    });
    // dot1.addEventListener("click", function(event) {
    //     if (click > 0) {


    //         console.log("re-clicked")
    //         about.style.display = "none";
    //         document.body.style.backgroundColor = "#cfd6de";
    //         headerDotHover = false;
    //         aboutActive = false;

    //         dots.forEach(dot => dot.style.backgroundColor = "black");
    //         click = 0;
    //     } else {
    //         click++
    //         about.style.display = "block"
    //         console.log("clicked")

    //         about.style.backgroundColor = "black";
    //         document.body.style.backgroundColor = "black";

    //         dots.forEach(dot => dot.style.backgroundColor = "#cfd6de");
    //         headerDotHover = true;
    //         aboutActive = true;
    //     }
    //});

}




//}

// function clickdotheader() {
//     var dotHeader = document.querySelectorAll("div.dotHeader");
//     displayAbout(dotHeader[0]);
//     displayAbout(dotHeader[1]);
// }