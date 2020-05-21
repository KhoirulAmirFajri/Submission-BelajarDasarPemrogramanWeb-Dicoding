let modal1 = document.getElementById("modal-corona1");
let modal2 = document.getElementById("modal-corona2");
let modal3 = document.getElementById("modal-corona3");

let btn = document.getElementById("myBtn");
let btn2 = document.getElementById("myBtn2");
let btn3 = document.getElementById("myBtn3");

let span1 = document.getElementsByClassName("virus1")[0];
let span2 = document.getElementsByClassName("virus2")[0];
let span3 = document.getElementsByClassName("virus3")[0];

btn.onclick = function() {
    modal1.style.display = "block";
}

btn2.onclick = function() {
    modal2.style.display = "block";
}

btn3.onclick = function() {
    modal3.style.display = "block";
}

span1.onclick = function() {
  modal1.style.display = "none";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

span3.onclick = function() {
    modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}