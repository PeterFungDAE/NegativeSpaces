function displayText(index) {
  var textItems = document.querySelectorAll("div.textItem");
  textItems.forEach(element => element.classList.add("invisible"));
  textItems[index].classList.remove("invisible");
  textItems[index].style.opacity = 1;
}

