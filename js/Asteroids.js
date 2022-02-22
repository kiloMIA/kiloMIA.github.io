function openTab(evt, tabName) {
    
    var i,j, tabcontent, tablinks,photocontent,photolinks;
  
    
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
