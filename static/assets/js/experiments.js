var dot1 = document.getElementById('dot1');
var dot2 = document.getElementById('dot2');
var dot3 = document.getElementById('dot3');
var dot4 = document.getElementById('dot4');
var dot5 = document.getElementById('dot5');
var dot6 = document.getElementById('dot6');
var dot7 = document.getElementById('dot7');

function goTo(scrollID) {
  dot1.classList.remove('active');
  dot2.classList.remove('active');
  dot3.classList.remove('active');
  dot4.classList.remove('active');
  var dot = document.getElementById('dot' + scrollID);
  dot.classList.add('active');
  var element = document.getElementById('sec' + scrollID);
  element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

var sect1 = document.getElementById('sec1');
var sect2 = document.getElementById('sec2');
var sect3 = document.getElementById('sec3');
var sect4 = document.getElementById('sec4');
var sect5 = document.getElementById('sec5');
var sect6 = document.getElementById('sec6');
var sect7 = document.getElementById('sec7');

var dot1 = document.getElementById('dot1');
var dot2 = document.getElementById('dot2');
var dot3 = document.getElementById('dot3');
var dot4 = document.getElementById('dot4');
var dot5 = document.getElementById('dot5');
var dot6 = document.getElementById('dot6');
var dot7 = document.getElementById('dot7');

window.addEventListener('scroll', function () {
  var sect1top = sect1.getBoundingClientRect().top;
  var sect2top = sect2.getBoundingClientRect().top;
  var sect3top = sect3.getBoundingClientRect().top;
  var sect4top = sect4.getBoundingClientRect().top;
  var sect5top = sect5.getBoundingClientRect().top;
  var sect6top = sect6.getBoundingClientRect().top;
  var sect7top = sect7.getBoundingClientRect().top;
  var topPad = 200;
  if (sect4top - topPad <= topPad) {
    dot1.classList.remove('active');
    dot2.classList.remove('active');
    dot3.classList.remove('active');
    dot4.classList.add('active');
  } else if (sect3top - topPad <= topPad) {
    dot1.classList.remove('active');
    dot2.classList.remove('active');
    dot3.classList.add('active');
    dot4.classList.remove('active');
  } else if (sect2top - topPad <= topPad) {
    dot1.classList.remove('active');
    dot2.classList.add('active');
    dot3.classList.remove('active');
    dot4.classList.remove('active');
  } else if (sect1top - topPad <= topPad) {
    dot1.classList.add('active');
    dot2.classList.remove('active');
    dot3.classList.remove('active');
    dot4.classList.remove('active');
  } else {
    dot1.classList.remove('active');
    dot2.classList.remove('active');
    dot3.classList.remove('active');
    dot4.classList.remove('active');
  }


}); 
