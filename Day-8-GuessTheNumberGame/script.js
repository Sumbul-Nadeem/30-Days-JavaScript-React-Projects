let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitBtn');
const playAgainBtn = document.getElementById('playAgainBtn');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const gameContainer = document.querySelector('.game');


submitBtn.addEventListener('click', function() {
    let guess = Number(guessInput.value);
    attempts++;

    if (!guess) {
        showMessage("⚠️ Please enter a number!", "orange");
        shakeInput();
    } else if (guess > randomNumber) {
        showMessage("📈 Too high! Try again.", "red");
        shakeInput();
    } else if (guess < randomNumber) {
        showMessage("📉 Too low! Try again.", "red");
        shakeInput();
    } else {
        showMessage(`🎉 Correct! The number was ${randomNumber}`, "green");
        celebrateWin();
        submitBtn.disabled = true;
        guessInput.disabled = true;
        playAgainBtn.style.display = "inline-block";
    }

    attemptsDisplay.textContent = `Number of attempts: ${attempts}`;
    guessInput.value = "";
});


playAgainBtn.addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsDisplay.textContent = "Number of attempts: 0";
    message.textContent = "";
    guessInput.disabled = false;
    submitBtn.disabled = false;
    guessInput.value = "";
    playAgainBtn.style.display = "none";
    gameContainer.style.backgroundColor = "white";
});

function showMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
    message.style.opacity = "1";
    setTimeout(() => message.style.opacity = "0.9", 200);
}


function shakeInput() {
    guessInput.classList.add("shake");
    setTimeout(() => guessInput.classList.remove("shake"), 400);
}

function celebrateWin() {
    gameContainer.style.backgroundColor = "#c3f7c3";
    for (let i = 0; i < 20; i++) {
        let confetti = document.createElement("span");
        confetti.textContent = "🎉";
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "%";
        confetti.style.animationDuration = (Math.random() * 2 + 1) + "s";
        gameContainer.appendChild(confetti);
        setTimeout(() => confetti.remove(), 2000);
    }
}
