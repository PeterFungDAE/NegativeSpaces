function displayText(index) {
  var textItems = document.querySelectorAll("div.textItem");
  textItems.forEach(element => element.classList.add("invisible"));
  textItems.forEach(element => element.classList.remove("visible"));
  textItems[index].classList.remove("invisible");
  textItems[index].classList.add("visible");

  menuDots(index);
}

// function imagesOnUnderlineTextHover () {
//   //97 = ASCII code for a lowerCase a

//   for(var n =0; n<5; n++) {
//     var chr = String.fromCharCode(97 + n);
//     var textImgPair = document.querySelectorAll(`span.${chr}`);
//     var textBeingHover = textImgPair[1];
//     var img = textImgPair[0];
//     // here there is the right couple a/a img text

//       textBeingHover.addEventListener("mouseover", function( event ) {
//         img.style.display = "block";
//       });
//      textBeingHover.addEventListener("mouseout", function( event ) {
//         img.style.display = "none";
//       });
//   }

// }

// function loopScrollMenu () {
//   // Container element which has a scrollbar c
//   var menu = document.getElementById('menu');

//   // Child element which is taller than the container e
//   var loopItem = document.getElementsByClassName('div.loopItem');

//   // The point at which the page will loop when scrolling down
//   var loopPoint = menu.clientHeight ;
//   var loopPointDown = loopItem.clientHeight - menu.clientHeight;

//   menu.addEventListener('scroll', e => {
//      // If the new scroll position matches our loop point
//     if (menu.scrollTop === loopPoint) {
//         // Scroll to (almost) the the top ('0' would be the top; we do this so we don't loop back again instantly)
//         menu.scrollTop = 1;
//     }  // Otherwise, if the new scroll position = the top of the element
//     else if (menu.scrollTop === 0) {
//         // Scroll to (almost) the bottom, we can use (our loop point - 1)
//         menu.scrollTop = loopPoint - 1;
//     } else if (menu.scrollTop > loopPointDown -1) {
//       menu.scrollTop = 1;
//     }

//   });
// }


function menuDots (index) {
  var menuItems = document.querySelectorAll("li.menuItem");
  var dotMenu = document.querySelectorAll("div.dotMenu");
  menuItems.forEach(element => element.classList.remove("activeMenuItem"));
  dotMenu.forEach(element => element.style.opacity="0");

  menuItems[index].classList.add("activeMenuItem");
  var activeDots = [];
  var children = menuItems[index].childNodes;
  for(var i =0; i < children.length; i++ ) {
    if (children[i].className == "dot dotMenu") {
       activeDots.push(children[i]);
      }
  }
  activeDots.forEach(element => element.style.opacity="1");

}
