function openTab(evt, tabName) {

  var i, j, tabcontent, tablinks, photocontent, photolinks;


  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }


  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }


  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

}
document.getElementById("defaultOpen").click();

$(document).ready(function () {
  $("#myModal").modal("show");
});


function PlaySound() {
  var audio = new Audio('space22.mp3');
  audio.play();
}


function starsmove() {
  document.getElementById("navbarSupportedContent").firstChild.Chi
  let x = document.getElementById("animation");
  x.style.left = 47 + "%";
  x.style.width = "85px";
  x.style.transition = "all 0.5s"
}

function starsnotmove() {
  let x = document.getElementById("animation");
  x.style.left = 70 + "%";
  x.style.width = "125px";
  x.style.transition = "all 0.5s"
}

function homemove() {
  let x = document.getElementById("animation");
  x.style.left = 0 + "%";
  x.style.width = "60px";
  x.style.transition = "all 0.5s"
}

function homenotmove() {
  let x = document.getElementById("animation");
  x.style.left = 70 + "%";
  x.style.width = "125px";
  x.style.transition = "all 0.5s"
}

function planmove() {
  let x = document.getElementById("animation");
  x.style.left = 22 + "%";
  x.style.width = "90px";
  x.style.transition = "all 0.5s"
}

function plannotmove() {
  let x = document.getElementById("animation");
  x.style.left = 70 + "%";
  x.style.width = "125px";
  x.style.transition = "all 0.5s"
}



