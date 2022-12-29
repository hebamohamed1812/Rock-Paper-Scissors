const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice; //every time you click the btn, the id of (target) the btn will appear next to you choice:
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    //every time you click on any btn will get random number from 1 to 3
    const randomNumber = Math.floor(Math.random() * 3) + 1; //or you can use possibleChoices.length instead of 3

    switch (randomNumber) {
        case 1: //if randomNumber === 1 will be rock
            computerChoice = 'rock';
            break;
        case 2: //if randomNumber === 2 will be scissors
            computerChoice = 'scissors';
            break;
        case 2: //if randomNumber === 3 will be paper
            computerChoice = 'paper';
            break;
    }

    computerChoiceDisplay.innerHTML = computerChoice; //computer will generate random choice
}

function getResult(){
    if(computerChoice === userChoice) {
        result = 'its a draw';
    }
    if(computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win :)';
    }
    if(computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you lost :(';
    }
    if(computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win :)';
    }
    if(computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you win :)';
    }
    if(computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you win :)';
    }
    if(computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'you lose :)';
    }

    resultDisplay.innerHTML = result; 

}