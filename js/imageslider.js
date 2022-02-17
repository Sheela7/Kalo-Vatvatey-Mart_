


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
console.log(n);
if(!window.matchMedia('(max-width: 768px)').matches){
var slides = document.getElementsByClassName("slideshow-container");
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
slides[slideIndex-1].style.display = "flex"; 
console.log('>768')
}else{
    console.log('768')
var slides = document.getElementsByClassName("slideshow-container-mobile");
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
slides[slideIndex-1].style.display = "block"; 
}


}