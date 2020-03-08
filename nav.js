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
//          console.log(chr);
//         img.style.display = "block";
//       });
//      textBeingHover.addEventListener("mouseout", function( event ) {
//         img.style.display = "none";
//       });
//   }

// }

// function displayImage(class) {
//   var textImgPair = document.querySelectorAll(`span.${class}`);
//   var img = textImgPair[0];
//   return img
// }


// document.addEventListener('DOMContentLoaded', function() {
//   imagesOnUnderlineTextHover();
// });

function menuDots (index) {
  var menuItems = document.querySelectorAll("li");
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
