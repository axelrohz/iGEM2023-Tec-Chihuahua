let reverse = false;
function toggleIndex() {
  var Index = document.getElementById("Index");
  if (Index.style.display === "none") {
    Index.style.display = "block";
    if (!reverse) {
      Index.classList.add("roll-in-blurred-left");
      Index.classList.remove("roll-in-blurred-left-Reverse");
      reverse = true;
    }
  } else {
    if (reverse){
        Index.classList.add("roll-in-blurred-left-Reverse");
        Index.classList.remove("roll-in-blurred-left");
        reverse = false;
    }
    Index.style.display = "none";
  }
}

window.onload = function() {
    var Index = document.getElementById("Index");
    var headings = document.querySelectorAll("h2");
    for (var i = 0; i < headings.length; i++) {
        var heading = headings[i];
        if (!heading.id) {
            heading.id = heading.textContent.replace(/\s+/g, '-').toLowerCase();
        }
        var link = document.createElement("a");
        link.href = "#" + heading.id;
        link.textContent = heading.textContent;
        
        // Agrega un controlador de eventos al enlace
        link.addEventListener('click', function(event) {
            // Previene el comportamiento predeterminado del enlace
            event.preventDefault();
            
            // Obtiene el elemento al que se hace referencia
            var target = document.getElementById(this.href.split('#')[1]);
            
            // Calcula la posición de desplazamiento ajustada
            var offsetPosition = target.offsetTop - 200; // Ajusta este valor según la altura de tu barra de navegación
            
            // Desplaza suavemente hasta el elemento
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
        
        Index.appendChild(link);
    }
    
    // Agrega un controlador de eventos de desplazamiento a la ventana
    window.addEventListener('scroll', function() {
        // Obtiene todos los enlaces en el div #Index
        var links = document.querySelectorAll('#Index a');
        
        // Recorre cada enlace
        for (var i = 0; i < links.length; i++) {
            var link = links[i];
            
            // Obtiene el elemento al que se hace referencia
            var target = document.getElementById(link.href.split('#')[1]);
            
            // Comprueba si el elemento está visible en la ventana
            var rect = target.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                // Si el elemento está visible, resalta el enlace
                link.style.fontWeight = 'bold';
                link.style.textDecoration = 'underline';
                link.style.color= '#5BC5AB'
            } else {
                // Si el elemento no está visible, quita el resaltado del enlace
                link.style.fontWeight = 'normal';
                link.style.textDecoration = 'none';
                link.style.color= 'black'
            }
        }
    });
}
