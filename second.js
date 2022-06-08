let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
var card = document.getElementById("header");
const audiooo= new Audio("./music/ae.mp3");


card.addEventListener("mouseover",()=>{
    audiooo.play();
    audiooo.loop = true;
    audiooo.volume = 0.5;
})

card.addEventListener("click",()=>{
    audiooo.play();
    audiooo.loop = true;
 
    confetti.start();
    
   
    setTimeout(()=>{
        setTimeout(()=>{
            audiooo.volume = 0.2;
            
        },1000)
    },50000)

})