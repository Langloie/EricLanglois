var colors = ["blue", "orange", "red", "yellow"];
var currentColor = 0;

//changes color of circles
//note: querySelectorAll takes an array, so the forEach method pulls each element
changeColor = () =>{
    document.querySelectorAll('.cell').forEach(function(element) {
        element.style.backgroundColor = colors[currentColor];
      });
    
    if(currentColor === colors.length-1){
        currentColor = 0;
    }
    else{
        currentColor++;
    }
}





window.addEventListener('DOMContentLoaded', documentLoaded, false);

function documentLoaded() {
  document.getElementsByClassName("editable-in-place")[0].addEventListener("click", clicked);;
  document.getElementById("btnStart").addEventListener("click", botaoClicked, false);
}

var startTime;
var limite;
var temporizador;

function botaoClicked() {
  "use strict";

  startTime = new Date();

  limite = parseInt(document.getElementById("txtTempo").value);

  clearInterval(temporizador);
  temporizador = setInterval(updateTime, 1000);
}

function updateTime() {
  "use strict";

  // read the current time
  var currentTime = new Date();

  // calculate how many seconds passed since the start of the timer
  var elapsed = (currentTime.getTime() - startTime.getTime()) / 1000;

  // convert seconds to minutes and seconds (below 60)
  var minutos = Math.floor(elapsed / 60);
  var segundos = Math.floor(elapsed % 60);

  // pad with zeroes on the left to look better
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  // show the elapsed time
  document.getElementsByClassName("inside")[0].innerHTML = minutos + ":" + segundos;

  // check if we are above the time limit and set the color of the timer accordingly
  if (minutos >= limite) {
    document.getElementsByClassName("editable-in-place")[0].className = "red";
  } else {
    document.getElementsByClassName("editable-in-place")[0].className = "blue";
  }

}

function clicked(evt) {
  // get the <input> and check if it is hidden
  var input = this.querySelector("input");
  var label = this.querySelector("div");

  if (evt.target === input) {
    // if user clicked on <input> do nothing, he is editing

  } else if (evt.target === label) {
    // <input> was hidden, make it visible
    input.classList.remove("hide");

    // and hide the label
    label.classList.add("hide");

    // fill the <input> with the text from the label
    input.value = label.innerHTML;

    // adicionar o listener para detectar o fim da edicao com "ENTER"
    input.addEventListener("keydown", function keydown(evt) {
      
      // 13 is the code for ENTER
      if (evt.keyCode === 13) {
        label.innerHTML = input.value;
        label.classList.remove("hide");
        input.classList.add("hide");
        
        // its important to remove the keydown listener, otherwise in a subsequent edit
        // we will end up with several keydown listeners running
        input.removeEventListener("keydown", keydown);
      }
      
    });
    input.focus();
  } else {
    // <input> was visible, hide it without modifying the value
    input.classList.add("hide");

    // show the label
    label.classList.remove("hide");
  }

}