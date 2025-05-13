const favMovie = "Bal Ganesh";
let attemptCount = 0;

function checkGuess() {
  const input = document.getElementById("movieInput");
  const message = document.getElementById("messageBox");
  const guess = input.value.trim();

  if (guess.toLowerCase() === "quit") {
    message.textContent = "You quit the game. Better luck next time!";
    input.disabled = true;
    return;
  }

  attemptCount++;

  if (guess === favMovie) {
    message.textContent = `🎉 Congrats! You guessed it right in ${attemptCount} tries!`;
    input.disabled = true;
  } else {
    if (attemptCount === 3) {
      message.textContent = "❌ Wrong! Hint: It's an animated Indian mythological film.";
    } else {
      message.textContent = "❌ Wrong guess, try again!";
    }
  }

  input.value = ""; // Clear the input field
}
