window.addEventListener('scroll',reveal);

function reveal(){
  var reveals = document.querySelectorAll('.teamBody');
  var windowheight = window.innerHeight;
  var revealBottom = reveals[0].getBoundingClientRect().top;
  var image = document.querySelectorAll('.image-space');
  var hideTop = image[0].getBoundingClientRect().top;
  var revealpoint = -20;
  if(revealBottom < 80){
    reveals[0].classList.add('active');
  }
  else{
    if (hideTop > -10)
    reveals[0].classList.remove('active');
  }

}