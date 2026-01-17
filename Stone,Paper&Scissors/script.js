let userScore = 0 ;
let computerScore = 0 ;
const option = document.querySelectorAll(".option");
let message = document.querySelector(".message");

// 1
option.forEach((option)=>{
    option.addEventListener("click" , ()=>{
        let userChoice = option.getAttribute("id");
        playgame(userChoice);
    });
});

// 2
const playgame = (userChoice) =>{

    console.log(`${userChoice} is user choise`);

    // computer choise 
    let computerChoice = computeroption() ;
    console.log(`${computerChoice} is computer choise`);

    // print result
    Result(userChoice , computerChoice) ;
};


const  computeroption = ()=>{
    const ops = ["rock" , "paper" , "scissor"] ;
    let comoption = Math.floor(Math.random() * 3) ;
    return ops[comoption];
};

// 3
const Result = (userChoice , computerChoice) =>{

    if(userChoice ===computerChoice){
        message.innerText = "Game was Draw. "
        message.style.backgroundColor = "#5e5e5e";
    }
    else{

        let userwin = true ;
        if(userChoice ==="rock"){
            userwin = computerChoice === "paper" ? false : true ;
        }

        else if(userChoice ==="paper"){
            userwin = computerChoice === "scissor" ? false : true ;
        }

        else{
            userwin = computerChoice === "rock" ? false : true ;
        }

        // update the message 
        showWinner(userwin , userChoice , computerChoice );
    }
};


let user_score = document.querySelector("#user-score") ;
let computer_score = document.querySelector("#computer-score");

// 4
const showWinner = (userwin , userChoice , computerChoice)=>{
     if(userwin){
        userScore++ ;
        user_score.innerText = `${userScore}`;
        message.innerText = `You won! ${userChoice} beats ${computerChoice}`;
        message.style.backgroundColor = "green";
     }else{
        computerScore++ ;
        computer_score.innerText = `${computerScore}`;
        message.innerText = `You lost! ${userChoice} lost by ${computerChoice}`;
        message.style.backgroundColor = "red";
     }
};

let restart = document.querySelector(".restart") ;

restart.addEventListener("click" , ()=>{
    userScore = 0 ;
    computerScore = 0 ;
    user_score.innerText = `0`;
    computer_score.innerText = `0`;
    message.innerText = `Play your move`;
    message.style.backgroundColor = "#003571";
});

