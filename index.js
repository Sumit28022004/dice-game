document.addEventListener("keydown",function(){
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var img1Path = "./dice"+randomNumber1+".png";
var img1Select = document.querySelector(".img1");
img1Select.setAttribute("src",img1Path);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var img2Path = "./dice"+randomNumber2+".png";
var img2Select = document.querySelector(".img2");
img2Select.setAttribute("src",img2Path);

var text = document.querySelector("h1");

if(randomNumber2 ===randomNumber1){
    text.innerText = "Draw!";
     
}else if(randomNumber1 > randomNumber2){
    text.innerText = "🚩Player 1 Wins";
    
}else{
    text.innerText = "Player 2 Wins🚩";
    
}
});
