let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// generate target number
const generateTarget = () => {
    let num = Math.floor(Math.random() * 10);
    return num;
  };

// determine closest result
const getAboluteDistance = (num1, num2) => {
    return Math.abs(num1-num2);
  }
  
const compareGuesses = (userGuess, compGuess, targetNum) => {
    let diffUser = getAboluteDistance(userGuess, targetNum);
    let diffComp = getAboluteDistance(compGuess, targetNum);

return diffUser <= diffComp;    

};

// increase score count

const updateScore = (winner) => {
    if (winner === "human") {
        humanScore += 1;
    } else computerScore += 1;
};

// advance round counter
const advanceRound = () => {
    currentRoundNumber += 1;
}



