console.log('Initialize Flash Card Game');
const card = document.querySelector('.question');
const correct = document.querySelector('.correct');
const next = document.querySelector('.next');
let choices = document.querySelectorAll('.answer');
const flashCards = [{
    "question": "Is this working 1?",
    "answers": ['Yes', 'No', 'No', 'No'],
    "correctAnswer": "Yes"
  },
  {
    "question": "Is this working 2?",
    "answers": ['No', 'Yes', 'No', 'No'],
    "correctAnswer": "Yes"
  },
  {
    "question": "Is this working 3?",
    "answers": ['No', 'No', 'Yes', 'No'],
    "correctAnswer": "Yes"
  },
  {
    "question": "Is this working 4?",
    "answers": ['No', 'No', 'No', 'Yes'],
    "correctAnswer": "Yes"
  }
];

let randomNumber = Math.floor(Math.random() * flashCards.length);
let prevRandomNumber = randomNumber;
let correctGuess = flashCards[randomNumber].correctAnswer;
let guess;

function startGame() {

  if (randomNumber === prevRandomNumber) {
    randomNumber = Math.floor(Math.random() * flashCards.length);
      startGame();
  } else {
    correctGuess = flashCards[randomNumber].correctAnswer;
    guess;
    card.innerText = flashCards[randomNumber].question;
    correct.innerText = '';
  
    for (let i = 0; i < choices.length; i++) {
      choices[i].addEventListener('click', letsPlay);
      choices[i].innerText = flashCards[randomNumber].answers[i];
      choices[i].style.setProperty('text-decoration', 'none');
    }
    
    prevRandomNumber = randomNumber;
  }

}

function letsPlay(event) {
  guess = event.currentTarget.innerText;
  if (guess === correctGuess) {
    correct.innerText = 'Correct';
  } else {
    correct.innerText = 'Incorrect';
    event.currentTarget.style.setProperty('text-decoration', 'line-through');
    event.preventDefault();
  }
}

next.addEventListener('click', startGame);

startGame();