let btns = Array.from(document.querySelectorAll('.btn-main'))

let main_div = document.querySelector('.rps')

res_div = document.createElement('div');

userScore = document.createElement('div');

userScore.textContent = ``;

compScore = document.createElement('div');

compScore.textContent = ``;

winner = document.createElement('div');


let uScore = 0;
let cScore = 0;



btns.forEach(btn => btn.addEventListener('click',game))
btns.forEach(btn => btn.addEventListener('transitionend',removeTransition))





function removeTransition(e){
    // if (e.propertyName != 'transform') return;

    // console.log('hi');
        
    e.target.classList.remove('selected');
}




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

function getUserChoice(e){
    // const inp = prompt('Rock,paper or scissors?');
    // console.log()

    const inp = e.target.textContent.toString();

    e.target.classList.add('selected');
   

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

function game(e){


        winner.textContent = ``;

        


        let u = getUserChoice(e);
        let c = getComputerChoice();
        res = playRound(u,c)

        

        if(res=='You win!'){
            res_div.textContent = "User Wins This Round!";
            uScore+=1

            userScore.textContent = `User Score: ${uScore.toString()}`

            if (uScore===5){

                winner.textContent = `Winner Of This Game Is User!`;
                userScore.textContent = '';
                compScore.textContent = '';
                res_div.textContent = '';
                uScore = 0;
                cScore = 0;



            }


        }

        else if(res=='You lose!'){
            res_div.textContent = "Computer Wins This Round!";
            cScore+=1
            compScore.textContent = `Computer Score: ${cScore.toString()}`

            if(cScore===5){
                winner.textContent = `Winner Of This Game Is Computer!`
                userScore.textContent = '';
                compScore.textContent = '';
                res_div.textContent = '';
                uScore = 0;
                cScore = 0;




            }



        }
        else{
            res_div.textContent = "This round Is A Tie!";


        }

        main_div.appendChild(res_div);
        main_div.appendChild(userScore);
        main_div.appendChild(compScore);
        main_div.appendChild(winner);

        
    }



