
let computerChoice = "";
function getComputerChoice(){
    const rps = ["rock","paper","scissors"];
    const rint = Math.floor(Math.random()*3);
    computerChoice = rps[rint];
    return computerChoice;
}


  
const rock = document.getElementById("rock");
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors");
const info = document.getElementById("info");
let points = 0;
const score = document.getElementById("score");

function updateScore() {
    points++;
    
    score.innerHTML = points;
    return points;
}

rock.addEventListener("click",()=> {
    const cpuChoice = getComputerChoice();
    if(cpuChoice =="scissors" ){
      //it should increment score by 1
      updateScore();
      info.innerHTML = "You Win";;
      console.log("Points: " + points);
    } else  {
        info.innerHTML = "You lose";
        console.log(cpuChoice);
        console.log(points);
        
    }
});
scissors.addEventListener("click",()=> {
    const cpuChoice = getComputerChoice();
    if(cpuChoice =="paper" ){
      //it should increment score by 1
      updateScore();
      info.innerHTML = "You Win";;
      console.log("Points: " + points);
    } else  {
        info.innerHTML = "You lose";
        console.log(cpuChoice);
        console.log(points);
        
    }
});
paper.addEventListener("click",()=> {
    const cpuChoice = getComputerChoice();
    if(cpuChoice =="rock" ){
      //it should increment score by 1
      updateScore();
      info.innerHTML = "You Win";;
      console.log("Points: " + points);
    } else  {
        info.innerHTML = "You lose";
        console.log(cpuChoice);
        console.log(points);
        
    }
});




/*
function play(){

    const cpuChoice = getComputerChoice();
    console.log(cpuChoice);

    if (cpuChoice == "rock" && pInput == paper) {
        console.log("player wins");
    }else if (cpuChoice == "paper" && pInput== scissors) {
        console.log("player wins");
    }else if(cpuChoice == "scissors" && pInput == rock){
        console.log("player wins");
    }else if( cpuChoice == pInput){
        console.log("draw");
    }else{
        console.log("player lost");
    }
    //dodać wynik do strony
    //podpiąć przyciski żeby odpalały te funkcje i parsowały wartość 
}*/