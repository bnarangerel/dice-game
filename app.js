//Тоглогчийн ээлжийг хадгалах хувьсагч player1 = 0, player2 = 1 
var activePlayer = 0;
//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var score = [90, 0];
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
                                            //Ээлж солих
function eeljSolih(){
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
        //Тоглогчдын ээлж солигдоно
        eeljSolih();
    }
});
                                    //HOLD товч дарсан үед
document.querySelector(".btn-hold").addEventListener("click", function(){
    //үндсэн онооны хэсэгт current оноог шилжүүлэх
    score[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent = score[activePlayer]; 
   //Тоглогчийн оноо 100с их болвол хожно
    if(score[activePlayer] >= 100){
        document.getElementById("name-" + activePlayer).textContent = "WINNER!";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        
    } else
        //hold товчийг дарснаар current оноо 0 болно
        //тоглогчидын ээлж солигдоно
        eeljSolih();
});

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
