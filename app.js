//Тоглогчийн ээлжийг хадгалах хувьсагч player1 = 0, player2 = 1 
var activePlayer
//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var score = [0, 0];

//Тоглогчийн ээлжийн оноог хадгалах хувьсагч
var roundScore = 0;

//Програм эхлэх
window.document.getElementById("score-0").textContent = "0";
window.document.getElementById("score-1").textContent = "0";

window.document.getElementById("current-0").textContent = "0";
window.document.getElementById("current-1").textContent = "0";

window.document.querySelector(".dice").style.display = "none";

//Roll dice дээр дарахад шоо өөрөө санамсаргүйгээр орхигдох хэсэг
var diceDom = document.querySelector(".dice");
window.document.querySelector(".btn-roll").addEventListener("click", function(){
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";
});
//Тоглогчийн ээлжийг солих
