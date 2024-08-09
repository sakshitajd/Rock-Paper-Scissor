let userScore =0;
let compScore =0;

const choices = document.querySelector(".choice");
const msg = document.querySelector(".msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "game was draw";
}

const showWinner = (userWin) => {
    if(userWin){
        console.log("you win");
        msg.innerText = "You WIn";
    } else {
        console.log("you lose");
        msg.innerText = "You Lose";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = gencompChoice();
    console.log("comp choice = ", compChoice); 
};

if(userChoice === compChoice){
    drawGame();
} else {
    let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice === "paper" ? false : true;
    } else if (userchoice === "paper"){
        userWin = compChoice === "scissors" ? false : true;
    } else {
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
};

choices.forEach((choice) => {

    choice.addEventLister("click", ()=>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
        
});