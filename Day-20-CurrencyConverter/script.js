const quotes = [
  "JavaScript is the language of the web.",
  "Typing speed improves with regular practice.",
  "Frontend development is both fun and creative.",
  "Never stop learning because life never stops teaching.",
  "The quick brown fox jumps over the lazy dog."
];

const quoteEl = document.getElementById("quote");
const inputBox = document.getElementById("inputBox");
const timerEl = document.getElementById("timer");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

// Add progress bar
const progressBar = document.createElement("div");
progressBar.className = "progress-bar";
progressBar.innerHTML = `<div class="progress-fill"></div>`;
quoteEl.insertAdjacentElement("afterend", progressBar);
const progressFill = document.querySelector(".progress-fill");

let startTime, timer, currentQuote;

function startTest() {
  currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
  renderQuote();
  inputBox.value = "";
  inputBox.disabled = false;
  inputBox.focus();

  timerEl.textContent = "0";
  wpmEl.textContent = "0";
  accuracyEl.textContent = "0";
  progressFill.style.width = "0%";

  startTime = new Date();
  clearInterval(timer);
  timer = setInterval(updateTimer, 1000);
}

function renderQuote() {
  quoteEl.innerHTML = "";
  currentQuote.split("").forEach(char => {
    const span = document.createElement("span");
    span.textContent = char;
    quoteEl.appendChild(span);
  });
}

function updateTimer() {
  const elapsedTime = Math.floor((new Date() - startTime) / 1000);
  timerEl.textContent = elapsedTime;
  calculateStats();
}

function calculateStats() {
  const textEntered = inputBox.value;
  const elapsedTime = (new Date() - startTime) / 1000 / 60; // minutes
  const wordsTyped = textEntered.trim().split(/\s+/).filter(Boolean).length;

  // Highlight text
  const quoteSpans = quoteEl.querySelectorAll("span");
  quoteSpans.forEach((span, index) => {
    const typedChar = textEntered[index];
    if (typedChar == null) {
      span.classList.remove("correct", "incorrect");
    } else if (typedChar === span.textContent) {
      span.classList.add("correct");
      span.classList.remove("incorrect");
    } else {
      span.classList.add("incorrect");
      span.classList.remove("correct");
    }
  });

  // Progress bar
  const progress = Math.min((textEntered.length / currentQuote.length) * 100, 100);
  progressFill.style.width = progress + "%";

  // WPM calculation
  if (elapsedTime > 0 && wordsTyped > 0) {
    const wpm = Math.round(wordsTyped / elapsedTime);
    wpmEl.textContent = wpm;
  }

  // Accuracy calculation
  let correctChars = 0;
  for (let i = 0; i < textEntered.length; i++) {
    if (textEntered[i] === currentQuote[i]) {
      correctChars++;
    }
  }
  const accuracy = Math.round((correctChars / textEntered.length) * 100) || 0;
  accuracyEl.textContent = accuracy;
}

function resetTest() {
  clearInterval(timer);
  quoteEl.textContent = "Click \"Start\" to begin the test";
  inputBox.value = "";
  inputBox.disabled = true;
  timerEl.textContent = "0";
  wpmEl.textContent = "0";
  accuracyEl.textContent = "0";
  progressFill.style.width = "0%";
}

startBtn.addEventListener("click", startTest);
resetBtn.addEventListener("click", resetTest);
inputBox.addEventListener("input", calculateStats);
