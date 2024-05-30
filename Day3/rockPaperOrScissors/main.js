const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors"
    ) {
      return userInput;
    } else if (userInput === "bomb") {
      return userInput;
    } else {
      console.log("error");
    }
  };
  //console.log(getUserChoice('rock'))
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      return "rock";
    } else if (randomNumber === 1) {
      return "paper";
    } else if (randomNumber === 2) {
      return "scissors";
    }
  };
  //console.log(getComputerChoice());
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "The game was a tie";
    }
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "The computer won";
      } else {
        return "The user won";
      }
    }
  
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "The computer won";
      } else if (computerChoice === "rock") {
        return "The user won";
      }
    }
  
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "The computer won";
      } else if (computerChoice === "paper") {
        return "The user won";
      }
    }
  
    if (userChoice === "bomb") {
      return "The user won";
    }
  };
  
  //console.log(determineWinner('rock', 'paper'))
  
  const playGame = () => {
    let userChoice = getUserChoice("rock");
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();