//Тоглогчийн ээлжийг хадгалах хувьсагч player1 = 0, player2 = 1 
var activePlayer = 0;
//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var score = [0, 0];
//Тоглогчийн ээлжийн оноог хадгалах хувьсагч
var roundScore = 0;

//Програм эхлэх
function start(){
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.querySelector(".dice").style.display = "none";
}
start();
//ROLL DICE дээр дарахад шоо шидэх хэсэг
var diceDom = document.querySelector(".dice");
document.querySelector(".btn-roll").addEventListener("click", function(){
    //санамсаргүйгээр 1-6 тоо гарч ирнэ
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    //Шооны зураг вэб дээр гарч ирэх хэсэг
    diceDom.style.display = "block";

    //Санамсаргүй тоонд харгалзах шооны зураг гарч ирэх
    diceDom.src = "dice-" + diceNumber + ".png";

    //Current score цуглуулах хэсэг

    if(diceNumber !== 1){
        //Буусан тоо 1-с өөр бол current scoreг нэмэгдүүлнэ
        roundScore += diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
        //current score цуцлагдана 
        roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
        //active биш болгох
        document.querySelector(".player-"+ activePlayer +"-panel").classList.remove("active");
        //тоглогчийн ээлжийг сольно
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

        //active байгаа тоглогчийг солих
       document.querySelector(".player-"+ activePlayer +"-panel").classList.add("active");
    }
});
//тоглогч HOLD товч дарсан үед
document.querySelector(".btn-hold").addEventListener("click", function(){
    //үндсэн онооны хэсэгт current оноог шилжүүлэх
    score[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent = score[activePlayer]; 
    //hold товчийг дарснаар current оноо 0 болно
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
    //тоглогчидын ээлж солигдоно
    document.querySelector(".player-"+ activePlayer +"-panel").classList.remove("active");
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    document.querySelector(".player-"+ activePlayer +"-panel").classList.add("active");
});
    //Тоглогчийн оноо 100с их болвол хожно
    if(score[0] >= 100 || score[1] >= 100){
        document.getElementById("score-" + activePlayer).textContent = "WINNER!";
        break;
    }
//NEW GAME товч дарсан үед
document.querySelector(".btn-new").addEventListener("click", function(){
    //Тоглолтыг шинээр эхлүүлнэ
    if(activePlayer === 1) 
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        document.querySelector(".player-0-panel").classList.add("active");
    start();
    score[0, 0];
    activePlayer = 0;
    roundScore = 0;
});
