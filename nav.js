


function displayText(index) {
  var textItems = document.querySelectorAll("p.textItem");
  textItems.forEach(element => element.classList.add("invisible"));
  textItems[index].classList.remove("invisible");
}

