let targetNumber, maxGuesses, remainingGuesses;

function startGame() {
  const difficulty = document.getElementById("difficulty").value;

  if (difficulty === "easy") {
    targetNumber = Math.floor(Math.random() * 10) + 1;
    maxGuesses = 5;
  } else if (difficulty === "medium") {
    targetNumber = Math.floor(Math.random() * 50) + 1;
    maxGuesses = 7;
  } else {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    maxGuesses = 10;
  }

  remainingGuesses = maxGuesses;
  document.getElementById("message").textContent = "";
  document.getElementById("remainingGuesses").textContent = `You have ${remainingGuesses} guesses left.`;
  document.getElementById("game").style.display = "block";
}

function submitGuess() {
  const guess = Number(document.getElementById("userGuess").value);

  if (!guess || guess <= 0) {
    document.getElementById("message").textContent = "Please enter a valid number.";
    return;
  }

  remainingGuesses--;

  if (guess === targetNumber) {
    document.getElementById("message").textContent = `🎉 Correct! The number was ${targetNumber}.`;
    endGame();
  } else if (remainingGuesses === 0) {
    document.getElementById("message").textContent = `💥 Game over! The number was ${targetNumber}.`;
    endGame();
  } else {
    const hint = guess < targetNumber ? "Too low!" : "Too high!";
    document.getElementById("message").textContent = `${hint}`;
    document.getElementById("remainingGuesses").textContent = `You have ${remainingGuesses} guesses left.`;
  }
}

function endGame() {
  document.getElementById("remainingGuesses").textContent = "";
  document.getElementById("userGuess").disabled = true;
}
