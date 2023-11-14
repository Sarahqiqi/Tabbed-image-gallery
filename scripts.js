function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

function buttonColor() {
  document.getElementById("button").style.background = "black";
  document.getElementById("button").style.color = "white";
}
function dblclick() {
  document.getElementById("button").style.background = "white";
  document.getElementById("button").style.color = "black";
}
