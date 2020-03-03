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

});

function createTextArea() {
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
}

function saveEdits() {
var noteP = document.createElement("p");
var activeTextItem = document.getElementsByClassName("textItem visible");
var textInput = document.getElementsByClassName("currentTextarea");
noteP.innerHTML = textInput[0].value;
activeTextItem[0].appendChild(noteP);
  //activeP = p without invisible

}

function checkEdits() {

//find out if the user has previously saved edits
if(localStorage.userEdits!=null)
document.getElementById("edit").innerHTML = localStorage.userEdits;
}

//get the editable element
// var editElem = document.getElementById("edit");

//get the edited element content
// var userVersion = editElem.innerHTML;

//save the content to local storage
// localStorage.userEdits = userVersion;

//write a confirmation to the user
// document.getElementById("update").innerHTML="Edits saved!";

//on mouseClicked in editor col => create textInput
// function opentextarea() {
//     var input = document.createElement('textarea');
//     input.name = 'post';
//     input.maxLength = 5000;
//     input.cols = 80;
//     input.rows = 40;
//     input.className = 'myCustomTextarea';
//     var button = document.createElement('button');
//     var oBody = document.getElementById("body");
//     while (oBody.childNodes.length > 0) {
//         oBody.removeChild(oBody.childNodes[0]);
//     }
//     oBody.appendChild(input);
//     oBody.appendChild(button);
//  }
