
    window.onload = function() {
  var sliders = document.querySelectorAll('.slider-container');

    sliders.forEach(function(slider) {
        slider.addEventListener('click', function () {
            var content = this.querySelector('.slider-content');
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                this.querySelector('.sliders').style.setProperty('--after-content', "'\\02795'");
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                this.querySelector('.sliders').style.setProperty('--after-content', "'\\02796'");
            }
        });
  });
};

