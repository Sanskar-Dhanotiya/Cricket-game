function chooseBat() {
  let userChoice = 'Bat';
  let computerChoice = generateComputerChoice();
  let result = getResult(userChoice, computerChoice);
  showResult(userChoice, computerChoice, result);
}

function chooseBall() {
  userChoice = 'Ball';
  computerChoice = generateComputerChoice();
  result = getResult(userChoice, computerChoice);
  showResult(userChoice, computerChoice, result);
}

function chooseStump() {
  userChoice = 'Stump';
  computerChoice = generateComputerChoice();
  result = getResult(userChoice, computerChoice);
  showResult(userChoice, computerChoice, result);
}

let scoreStr = localStorage.getItem('score');
let score;
resetScore(scoreStr);

function resetScore(scoreStr) {
  score = scoreStr ? JSON.parse(scoreStr) : {
    win: 0,
    lost: 0,
    tie: 0,
  };

  score.DisplayScore = function () {
    return `Score : Won: ${score.win} Lost: ${score.lost} Tie: ${score.tie}`;
  }
  showResult();
}
function generateComputerChoice() {

  let randomNumber = Math.random() * 3;

  if (randomNumber > 0 && randomNumber <= 1) {
    return 'Bat';
  }
  else if (randomNumber > 1 && randomNumber <= 2) {
    return 'Ball';
  }
  else {
    return 'Stump';
  }
}

function getResult(userChoice, computerChoice) {
  if (userChoice === 'Bat') {
    if (computerChoice === 'Bat') {
      score.tie++;
      return `It's a tie`;
    }
    else if (computerChoice === 'Ball') {
      score.win++;
      return `You have won`;
    }
    else {
      score.lost++;
      return 'Computer has won';
    }
  } else if (userChoice === 'Ball') {
    if (computerChoice === 'Bat') {
      score.lost++;
      return 'Computer has won';
    }
    else if (computerChoice === 'Ball') {
      score.tie++;
      return `It's a tie`;
    }
    else {
      score.win++;
      return `You have won`;
    }
  } else {
    if (computerChoice === 'Bat') {
      score.win++;
      return `You have won`;
    }
    else if (computerChoice === 'Ball') {
      score.lost++;
      return 'Computer has won'
    }
    else {
      score.tie++;
      return `It's a tie`;
    }
  }
}

function showResult(userChoice, computerChoice, result) {
  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('#user-move').innerText = userChoice ? `You have chosen ${userChoice}.` : '';
  document.querySelector('#computer-move').innerText = computerChoice ? `Computer has chosen ${computerChoice}.` : '';
  document.querySelector('#result').innerText = result || '';
  document.querySelector('#score').innerText = score.DisplayScore();
}