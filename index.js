var i = 0;
var txt = 'HTML,CSS,JavaScript,Jquery,Node.JS,React.JS, PHP,SQL';
var speed = 75;

 window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("Skills").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

};
