let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 10;

function checkGuess() {
    let userGuess = parseInt(document.getElementById('userGuess').value);

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        document.getElementById('result').textContent = "Please enter a number between 1 and 100.";
        return;
    }

    guesses--;

    if (userGuess === randomNumber) {
        document.getElementById('result').textContent = "Congratulations! You guessed the correct number.";
        disableInputAndButton();
    } else if (userGuess < randomNumber) {
        document.getElementById('result').textContent = "Up";
    } else {
        document.getElementById('result').textContent = "Down";
    }

    if (guesses === 0) {
        document.getElementById('result').textContent = "You have run out of guesses. The correct number was " + randomNumber + ".";
        disableInputAndButton();
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guesses = 10;
    document.getElementById('result').textContent = "";
    document.getElementById('userGuess').value = "";
    document.getElementById('userGuess').disabled = false;
    document.getElementsByTagName('button')[0].disabled = false;
}

function disableInputAndButton() {
    document.getElementById('userGuess').disabled = true;
    document.getElementsByTagName('button')[0].disabled = true;
}
