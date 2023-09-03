function DesplegarVaca() {
  var cow = document.getElementById('cow');
  var diagram = document.getElementById('Diagrama');
  var clickme = document.getElementById('CLICK');
  var SPAN1 = document.getElementById('span1');
  var SPAN2 = document.getElementById('span2')

  if (diagram.style.display === 'flex') {
    // Si el diagrama ya está visible, ocultarlo y mover la vaca de nuevo a la izquierda
    diagram.style.display = 'none';
    SPAN1.style.display='none'
    SPAN2.style.display='none'
    setTimeout(function() {
      clickme.style.display = 'inline-block';
    }, 300);
    cow.animate([{left: '53%', bottom: '25%'}, {left: '15%', bottom: '25%'}], {duration: 300}).onfinish = function() {
      cow.style.left = '15%';
      cow.style.bottom='25%';
    };
    
  } else {
    // Si el diagrama no está visible, mostrarlo y mover la vaca a la derecha
    diagram.style.display = 'flex';
    clickme.style.display='none'
    
    // Crear una animación personalizada para el elemento diagram
    diagram.animate([
      // Propiedades iniciales
      {opacity: 0, transform: 'translate3d(400px, 0, 0) scaleX(0)'},
      // Propiedades intermedias
      {opacity: 1, transform: 'translate3d(-25px, 0, 0) scaleX(1)', offset: 0.6},
      {transform: 'translate3d(10px, 0, 0) scaleX(0.98)', offset: 0.75},
      {transform: 'translate3d(-5px, 0, 0) scaleX(0.995)', offset: 0.9},
      // Propiedades finales
      {transform: 'translate3d(0, 0, 0)'}
    ], {
      // Duración de la animación
      duration: 1000,
      // Tipo de animación (por defecto es 'ease')
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
    });
    
    cow.animate([{left: '15%', bottom: '25%'}, {left: '53%', bottom: '25%'}], {duration: 300}).onfinish = function() {
      cow.style.left = '53%';
      cow.style.bottom='25%';
    };
    
    setTimeout(function() {
      SPAN1.style.display = 'flex';
      SPAN2.style.display = 'flex';
    }, 300);

  }}