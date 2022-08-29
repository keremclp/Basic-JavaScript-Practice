const  getUserChoice =  userInput  =>  {
    //converts user input to lowercase
    userInput = userInput.toLowerCase(); 
    //checks if user input is valid
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
        return userInput;
        
    }
    else{
        console.log('Error!');
    }
}


const getComputerChoice = () => {
    //generates random number between 0 and 2
    const number = Math.floor(Math.random() * 3);
    //returns rock, paper, or scissors based on random number
    switch(number){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

//determines the winner of the game
const determineWinner = (userChoice, computerChoice) => {
    //checks if user and computer chose the same thing
    if(userChoice === computerChoice){
        return 'The game is a tie!';
    }
    //checks if user chose rock
    else if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return 'The computer won!';
        }
        else{
            return 'You won!';
        }
    }
    //checks if user chose paper
    else if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            return 'The computer won!';
        }
        else{
            return 'You won!';
        }
    }
    //checks if user chose scissors
    else if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            return 'The computer won!';
        }
        else{
            return 'You won!';
        }
    }
    //checks if user input is invalid
    else{
        return 'Error!';
    }
}

//plays a single game of rock paper scissors
const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();