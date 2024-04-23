// Adding Preload
var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
  loader.remove();
});


// Adding Typing Effect
var i = 0;
var txt = 'Omar Ismail, also known as Hunter';
var speed = 35;

function typeWriter() {
  if (i < txt.length) {
    console.log("aaaaaaa")
    document.getElementById("typing-effect").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
document.getElementById("typing-effect").onload = typeWriter();