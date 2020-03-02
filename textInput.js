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
  input.rows = 40;
  input.className = 'currentTextarea';
  var button = document.createElement('button');
  button.innerHTML = 'Submit';
  button.style.position = "absolute";
  input.style.marginTop = (event.clientY - headerY - 50)+ "px";
  document.getElementById("noteContainer").appendChild(input);
  input.appendChild(button);
  textAreaActive = true;
}

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
