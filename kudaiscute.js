var card = document.getElementById("kuda");

var i = 0;
var txt = 'I know I don’t tell you this often enough, but I am so grateful to have you as my dad. Thank you papa for everything.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("kuda").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

}


card.addEventListener("mouseover",()=>{
    typeWriter();
    
    typeWriter.loop = true;
    
   
})