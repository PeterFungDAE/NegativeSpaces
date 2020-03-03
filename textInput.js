var textAreaActive = false;

document.addEventListener('DOMContentLoaded', function() {
    noteContainer = document.getElementById("noteContainer");
    noteContainer.addEventListener("mouseover", function( event ) {
      noteContainer.addEventListener("click",function( event ) {
        if(textAreaActive == false) {
          createTextArea();
          console.log("it works");
        }
      });
    });
    document.addEventListener('scroll', function(){
      scrollNote();
    });
});

function createTextArea() {
  //create box for user text Input
  var headerY =  document.getElementById('header').clientHeight;
  var input = document.createElement('textarea');
  input.cols = 60;
  input.rows = 5;
  input.className = 'currentTextarea';
  var button = document.createElement('button');
  button.innerHTML = 'Submit';
  button.style.position = "absolute";
  input.style.marginTop = (event.clientY - headerY - 50)+ "px";
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
  activeTextItem[0].appendChild(noteP);
  document.getElementById("saveBtn").classList.add('invisible');
  textInput[0].parentNode.removeChild(textInput[0]);
  textAreaActive = false;

}

function scrollNote() {
  var addedNotes =
  document.getElementsById('noteContainer').style.offsetTop = window.scrollY;
}
// function checkEdits() {

// //find out if the user has previously saved edits
// if(localStorage.userEdits!=null)
// document.getElementById("edit").innerHTML = localStorage.userEdits;
// }

//get the editable element
// var editElem = document.getElementById("edit");

//get the edited element content
// var userVersion = editElem.innerHTML;

//save the content to local storage
// localStorage.userEdits = userVersion;

//write a confirmation to the user
// document.getElementById("update").innerHTML="Edits saved!";


