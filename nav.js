var isClicked = -1;
var myContext;
var clones;
var disableScroll = false;
var scrollHeight = 0;
var scrollPos = 0;
var clonesHeight = 0;
var i = 0;

function displayText(index) {
    var textItems = document.querySelectorAll("div.textItem");
    textItems.forEach(element => element.classList.add("invisible"));
    textItems.forEach(element => element.classList.remove("visible"));
    textItems[index].classList.remove("invisible");
    textItems[index].classList.add("visible");

    isClicked = index
    console.log(isClicked)
    menuDots(index)
}



function menuDots(index) {

    var menuItems = document.querySelectorAll("li.menuItem");

    var dotMenu = document.querySelectorAll("div.dotMenu");

    // var selected = document.getElementById("item-"+index)

    menuItems.forEach(element => element.classList.remove("activeMenuItem"));
    dotMenu.forEach(element => element.style.opacity = "0");

    menuItems[index].classList.add("activeMenuItem");
    var activeDots = [];
    var children = menuItems[index].childNodes;
    for (var i = 0; i < children.length; i++) {
        if (children[i].className == "dot dotMenu") {
            activeDots.push(children[i]);
        }
    }
    if (isClicked >= 0) {
        menuItems[isClicked].classList.add("activeMenuItem");
        //var activeDots = [];
        var children = menuItems[isClicked].childNodes;
        for (var i = 0; i < children.length; i++) {
            if (children[i].className == "dot dotMenu") {
                activeDots.push(children[i]);
            }
        }
    }

    activeDots.forEach(element => element.style.opacity = "1");

}

//document.onload = starting

//var doc



function starting() {
    setTimeout(function() {
        var item0 = document.getElementById("item-0")
        item0.scrollIntoView({ behavior: 'smooth' });
        console.log("started")
    }, 400);
};






// function getScrollPos() {
//     return (myContext.pageYOffset || context.scrollTop) - (context.clientTop || 0);
// }

// function setScrollPos(pos) {
//     myContext.scrollTop = pos;
// }

// function getClonesHeight() {
//     clonesHeight = 0;

//     for (i = 0; i < clones.length; i += 1) {
//         clonesHeight = clonesHeight + clones[i].offsetHeight;
//     }

//     return clonesHeight;
// }

// function reCalc() {
//     scrollPos = getScrollPos();
//     scrollHeight = myContext.scrollHeight;
//     clonesHeight = getClonesHeight();

//     if (scrollPos <= 0) {
//         setScrollPos(1); // Scroll 1 pixel to allow upwards scrolling
//     }
// }

// function scrollUpdate() {
//     if (!disableScroll) {
//         scrollPos = getScrollPos();

//         if (clonesHeight + scrollPos >= scrollHeight) {
//             // Scroll to the top when you’ve reached the bottom
//             setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
//             disableScroll = true;
//         } else if (scrollPos <= 0) {
//             // Scroll to the bottom when you reach the top
//             setScrollPos(scrollHeight - clonesHeight);
//             disableScroll = true;
//         }
//     }

//     if (disableScroll) {
//         // Disable scroll-jumping for a short time to avoid flickering
//         window.setTimeout(function() {
//             disableScroll = false;
//         }, 40);
//     }
// }

// function init() {
//     console.log("init")
//     starting();
//     myContext = document.querySelector('.js-loop');
//     clones = myContext.querySelectorAll('.is-clone');
//     setScrollPos(Math.round(clones[0].getBoundingClientRect().top + getScrollPos() - (context.offsetHeight - clones[0].offsetHeight) / 2));

//     reCalc();

//     myContext.addEventListener('scroll', function() {
//         window.requestAnimationFrame(scrollUpdate);
//     }, false);

//     window.addEventListener('resize', function() {
//         window.requestAnimationFrame(reCalc);
//     }, false);
// }

// if (document.readyState !== 'loading') {

//     //  init()
// } else {

//     document.addEventListener('DOMContentLoaded', init, false)

// }