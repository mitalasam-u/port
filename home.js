let menu = document.getElementById('bars');
let nav = document.getElementById('navbar');
const searchbox = document.getElementById('searchbox');

menu.onclick = () =>{
 menu.classList.toggle('fa-times');
 nav.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  nav.classList.remove('active');
 }

function search(){
if (searchbox.style.display = 'none') {
 searchbox.style.display = 'block';
} else {
 searchbox.style.display = 'none';
}
}
// fade
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}
