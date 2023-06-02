function getComputerChoice(){
    let number =Math.floor(Math.random()*3)

    if (number==0){
        return 'rock';
    }
    else if(number == 1){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

function getUserChoice(){
    const inp = prompt('Rock,paper or scissors?');

    return inp.toLowerCase();
}


function playRound(userChoice,computerChoice){
    const computerWins = 'You lose!';
    const playerWins = 'You win!';
    const tie = 'Tie';


    // user - rock
    if (userChoice==='rock'){
        if (computerChoice=='rock'){
            return tie;
        }
        else if (computerChoice=='paper'){
            return computerWins;
        }
        else{
            return playerWins;
        }


    }
    
    // user paper
    else if (userChoice==='paper'){

        if (computerChoice=='rock'){
            return playerWins ;
        }
        else if (computerChoice=='paper'){
            return tie ;
        }
        else{
            return computerWins;
        }

    }
    //user scissors
    else{

        if (computerChoice=='rock'){
            return computerWins  ;
        }
        else if (computerChoice=='paper'){
            return playerWins ;
        }
        else{
            return tie ;
        }

    }

}

function game(){
    let userWins = 0;
    let computerWins = 0;

    for(let i=0;i<5;i++){

        let u = getUserChoice();
        let c = getComputerChoice();
        res = playRound(u,c)

        if(res=='You win!'){
            userWins+=1

        }

        if(res=='You lose!'){
            computerWins+=1

        }
        
    }

    if(userWins>computerWins){
        console.log('You Won This Round Of 5');
    }
    else if(userWins<computerWins){
        console.log('You Lose This Round Of 5');
    }
    else{
        console.log('This round of 5 is a tie');

    }
}



