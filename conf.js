var card = document.getElementById("kuda");

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
        // document.getElementById("kuda").style.display = "none";
        
        setTimeout(()=>{
            audiooo.volume = 0.2;
            
        },1000)
    },50000)

})