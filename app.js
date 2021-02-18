//Тоглогчийн ээлжийг хадгалах хувьсагч player1 = 0, player2 = 1 
var activePlayer
//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var score = [0, 0];

//Тоглогчийн ээлжийн оноог хадгалах хувьсагч
var roundScore = 0;

//Шооны тоог хадгалах хувьсагч //// Санамсаргүйгээр 1-6г буулгана
var dice = Math.floor(Math.random() * 6) + 1;
//тоглогчийн онооны оронд шооны дугаарыг тавих


//Програм эхлэх
window.document.querySelector("#score-0").textContent = "0";
window.document.querySelector("#score-1").textContent = "0";
window.document.querySelector("#current-0").textContent = "0";
window.document.querySelector("#current-1").textContent = "0";
window.document.querySelector(".dice").style.display = "none";
