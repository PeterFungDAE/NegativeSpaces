var textAreaActive = false;
var aboutActive = false;
var textItems = document.querySelectorAll("div.textItem");

document.addEventListener('DOMContentLoaded', function() {
  displayAbout();
  idleRandomDots(500);
  document.body.onmousemove = event => {idleRandomDots(500);}
  var activeTextItem = document.getElementsByClassName("textItem visible");
  loopScrollMenu();
    noteContainer = document.getElementById("noteContainer");
    noteContainer.addEventListener("mouseover", function( event ) {
      noteContainer.addEventListener("click",function( event ) {
        if(textAreaActive == false) {
          createTextArea();
        }
      });
    });
    document.body.addEventListener("click", e => {
        activeTextItem[0].addEventListener('scroll', function(container){
        scrollNote(activeTextItem[0]);
      });

    })
});

function createTextArea() {
  //create box for user text Input
  var headerY =  document.getElementById('header').clientHeight;
  var input = document.createElement('textarea');
  input.cols = 30;
  input.rows = 5;
  input.className = 'currentTextarea';
  var button = document.createElement('button');
  button.innerHTML = 'Submit';
  button.style.position = "absolute";
  input.style.marginTop = (event.clientY)+ "px";
  document.getElementById("noteContainer").appendChild(input);
  input.appendChild(button);
  textAreaActive = true;
  document.getElementById("saveBtn").classList.remove('invisible');
}

function saveEdits() {
  var noteP = document.createElement("p");
  noteP.className = "noteP";
  var activeTextItem = document.getElementsByClassName("textItem visible");
  var textInput = document.getElementsByClassName("currentTextarea");
  noteP.innerHTML = textInput[0].value;
  noteP.style.marginTop = textInput[0].style.marginTop;
  var children = activeTextItem[0].children;
  for(var i =0; i < children.length; i++ ) {
    if (children[i].className == "addedNotes") {
         children[i].appendChild(noteP);
      }
  }
  document.getElementById("saveBtn").classList.add('invisible');
  textInput[0].parentNode.removeChild(textInput[0]);
  textAreaActive = false;

}

function scrollNote(container) {
  var addedNotes = document.getElementsByClassName("noteP");
  if(addedNotes.length != 0) {
     for(var i = 0; i < addedNotes.length; i++) {
        addedNotes[i].style.top = -container.scrollTop + "px";
     }
  }
}


