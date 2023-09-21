

document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los elementos con la clase 'sliders'
    var sliders = document.querySelectorAll('.slider-container');

    // Agrega un evento de clic a cada slider
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener('click', function () {
            // Selecciona el contenido del slider
            var content = this.nextElementSibling;

            // Cambia la altura máxima dependiendo del estado actual
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }

}
)
