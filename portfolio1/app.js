// let dots = document.querySelectorAll('.dot'),
    // dotsArea = document.querySelectorAll('.dots-container'),
    slides = document.querySelectorAll('.about_image_slider_container'),
    slide = document.querySelectorAll('.slide');
    // left = document.querySelector('.left-btn'),
    // right = document.querySelector('.rigth-btn'),
    slideIndex = 1;

showSlides(slideIndex);
function showSlides (n){
 
  if(slideIndex > slide.length){
    slideIndex = 1;
    
  }
  
  // if (n < 1){
  //   slideIndex = slide.length;

  // }

for (let i = 0; i < slide.length; i++){
  slide[i].style.display = 'none';
}
// for(let i = 0; i < dots.length; i++){
//   dots[i].classList.remove('dot-active');
// }
slide[slideIndex - 1].style.display = 'block';
console.log(slideIndex)
// dots[slideIndex - 1].classList.add('dot-active');
 
}
function plusSlides(n) {
  showSlides(slideIndex = slideIndex + n);
}
// left.addEventListener('click', function(){
//   plusSlides(-1);
// })

// right.addEventListener('click', function(){
//   plusSlides(1);
// })
setInterval(function(){
    plusSlides(1);
}, 3000);
