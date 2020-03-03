function displayText(index) {
  var textItems = document.querySelectorAll("div.textItem");
  textItems.forEach(element => element.classList.add("invisible"));
  textItems.forEach(element => element.classList.remove("visible"));
  textItems[index].classList.remove("invisible");
  textItems[index].classList.add("visible");

  menuDots(index);
}

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
