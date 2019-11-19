let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
guessField.focus();

function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Cheehoo braddah! You got \'em!';
    lastResult.style.backgroundColor = 'green';
    lastResult.style.color = 'white';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = 'Shoots brah, try be mo\' akamai next time.';
    lastResult.style.backgroundColor = 'red';
    lastResult.style.color = 'white';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Nah, try again.';
    lastResult.style.backgroundColor = 'yellow';
    lastResult.style.color = 'black';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Pretty sure I see more feet than that...';
      lowOrHi.style.color = 'yellow';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Woah, woah, coo\' da jets, not that many.';
      lowOrHi.style.color = 'yellow';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Hana hou!';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
