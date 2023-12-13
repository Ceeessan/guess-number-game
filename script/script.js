
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let tries = 5;
let highScore = 0;

let guessedNumber = document.querySelector('.number');
let message = document.querySelector('.message');
let checkNumberBtn = document.querySelector('.check');
let triesQuantity = document.querySelector('.tries');
let highscoreBoard = document.querySelector('.highscore');

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    guessedNumber.textContent = guess;


    //If player haven't guessed
    if (!guess) {
        message.textContent = 'No number!'
    }
    //When player wins
    else if (guess === secretNumber) {

        checkNumberBtn.disabled = true;

        message.textContent = 'Correct Number!';

        guessedNumber.style.padding = '8%';
        guessedNumber.style.backgroundColor = 'green';

        highScore++;

        highscoreBoard.textContent = highScore;
    }
    //When guess is wrong
    else if (guess !== secretNumber) {
        if (tries > 1) {

            message.textContent = guess > secretNumber ? 'Too high!' : 'Too low!';

            tries--;
            triesQuantity.textContent = tries;

        } else {
            checkNumberBtn.disabled = true;

            message.textContent = 'You lost the game!';

            triesQuantity.textContent = 0;


            if (highScore > 0) {
                highScore--;
            }
            highscoreBoard.textContent = highScore;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {

    secretNumber = Math.trunc(Math.random() * 20 + 1);

    tries = 5;

    guessedNumber.textContent = '?';
    guessedNumber.style.backgroundColor = 'grey';
    guessedNumber.style.padding = '2%';

    document.querySelector('.guess').value = '';

    triesQuantity.textContent = tries;



    checkNumberBtn.disabled = false;
});

