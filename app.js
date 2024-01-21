let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msgRead=document.querySelector("#msg");
const userScoreAccess=document.querySelector("#user_score");
const compScoreAccess=document.querySelector("#comp_score");

const genCompChoice=()=>{
    let options=["rock","paper","scissor"];
    //computer each time has to choose randomly from above options
    //js mein string randomly generate karna possible nhi hain
    //so we create array and its indices are numbers so it can be accessed randomly
    //math.radom() randomly selects number from range 0-1
    //we want the range to be 0-2
    //so math.random()*3-->range=0-2
    //to remove decimal values math.floor(math.random()*3))
    const randomIdx = Math.floor((Math.random()) * 3);
    return options[randomIdx];
};

const drawGame=()=>{
    console.log("game was a draw.");
    msgRead.innerText="It was a draw. Play again";
};

//user Won or not
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin === true){
        console.log("you win!");
        userScore++;
        userScoreAccess.innerText=userScore;
        msgRead.innerText=`You win!Your choice ${userChoice} beats computer's choice${compChoice}`;
        
    }
    else{
        console.log("you lose!");
        compScore++;
        compScoreAccess.innerText=compScore;
        msgRead.innerText=`You lose!Computer's choice ${compChoice} beats your choice${userChoice}`;
    }
}

//for computer choice and score updation
const playGame=(userChoice)=>{
    console.log("User Choice = ",userChoice);
    //to generate computer choice:
    const compChoice=genCompChoice();
    console.log("computer choice=",compChoice);

    if(userChoice===compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin=true;

        if(userChoice==="rock"){
            //computer's choice could not be rock otherwise else won't be executed at all
            //computer's choice could be scissor,or paper
            //if computer chooses paper then user looses
            userWin=compChoice === "paper" ? false : true;
        }
        else if(userChoice=="paper"){
            //computers choice: scissor,rock
            userWin= compChoice === "scissor" ? false : true;
        }
        else{
            //computers choice: paper,rock
            userWin= compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};


//user choice 
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})