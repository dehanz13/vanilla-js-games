/*  TODO:
    - show high score -> by storing it in local storage
    - fetch random words from an API
 */
// VARIABLES
let words = [
  "magic",
  "journey",
  "travel",
  "explore",
  "life",
  "experience",
  "happiness",
  "gratitude",
  "discipline",
  "exercise",
  "workout",
  "friendship",
  "practice",
  "routine",
  "morning",
  "reading",
  "books",
  "education",
  "amour",
  "delibrate",
  "protein",
  "partner",
  "empathy",
  "concert",
  "patience",
  "humor",
  "resilience",
  "confidence",
  "consistency",
  "appreciation",
  "literature",
  "meaning",
  "humble",
  "province",
  "flight",
  "alchemy",
  "intense",
  "adorable",
  "swoon",
  "stunning",
  "sensational",
  "provocative",
  "apocalypse",
  "compliance",
  "meticulous",
  "replicate",
  "relentless",
  "pursuit",
  "proactive",
  "astounding",
  "delightful",
  "legitimate",
  "mesmerizing",
  "polarizing",
  "validate",
];

let successWords = [
  "Nice one!",
  "Good Job!",
  "Wow! Keep it going!",
  "Let's not give up!",
  "You’re on the right track now!",
  "I’m very proud of you. 😜",
  "That’s coming along nicely. 😉",
  "Good work!",
  "You are very good at that. 😎",
  "That’s much, much better!",
  "You’re doing a good job. 😏",
  "That’s it!",
  "Now you’ve figured it out. 🤓",
  "Great!",
  "Keep working on it. 🔥",
  "You’re improving. 🤩",
  "You are learning fast. 🧐",
  "Good for you!",
];
const levels = {
  noob: 7,
  pro: 3,
  hacker: 2,
  god: 1,
};

let currentLevel = levels.noob;
let timeCount = currentLevel + 1,
  scoreCount = 0,
  isPlaying,
  wordDisplayed;

let currentWord = document.querySelector("#current-word");
let inputWord = document.querySelector("#input-word");
let time = document.querySelector("#seconds");
let timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");
let message = document.querySelector("#message");
let difficultyLevel = document.querySelector("#difficulty");

// EVENT LISTENERS
window.addEventListener("load", init);
inputWord.addEventListener("input", startMatch);
difficultyLevel.addEventListener("change", changeLevel);

// FUNCTIONS
function init() {
  // set default level to noob
  time.textContent = currentLevel;
  // set a default word
  showWord();
  // call the countdown function here for every second
  setInterval(countdown, 1000);
  // check the game status for every 0.1s
  setInterval(checkStatus, 100);
}

function showWord() {
  let randomIndex = Math.floor(Math.random() * words.length);
  wordDisplayed = words[randomIndex];
  currentWord.textContent = wordDisplayed;
}

function countdown() {
  if (timeCount > 0) {
    timeCount--;
    timeLeft.textContent = timeCount;
  } else if (timeCount === 0) {
    isPlaying = false;
  }
}

function checkStatus() {
  if (!isPlaying && timeCount === 0) {
    message.textContent = "Time is up!";
    scoreCount = 0;
    message.className = "mt-3 text-danger";
  }
}

function startMatch() {
  let randomIndex = Math.floor(Math.random() * successWords.length);
  let successMessage = successWords[randomIndex];
  if (this.value === wordDisplayed) {
    // set game to start
    isPlaying = true;
    // set message to correct
    message.textContent = successMessage;
    message.className = "mt-3 text-success";
    // set the input field back to blank for a new game
    this.value = "";
    // set new score
    scoreCount++;
    score.textContent = scoreCount;
    // set time count back to default to reset the game
    timeCount = currentLevel + 1;
    // display a different word
    showWord();
  }
}

function changeLevel() {
  // assign a level variable depending on which option is selected
  let level = this.options[this.selectedIndex].value;
  console.log(level);

  if (level === "Noob") {
    inputWord.focus();
    scoreCount = 0;
    message.textContent = "";
    isPlaying = true;
    currentLevel = levels.noob;
    time.textContent = currentLevel;
    timeCount = currentLevel + 1;
    startMatch();
  }
  if (level === "Pro") {
    inputWord.focus();
    scoreCount = 0;
    message.textContent = "";
    isPlaying = true;
    currentLevel = levels.pro;
    time.textContent = currentLevel;
    timeCount = currentLevel + 1;
    startMatch();
  }
  if (level === "Hacker") {
    inputWord.focus();
    scoreCount = 0;
    message.textContent = "";
    isPlaying = true;
    currentLevel = levels.hacker;
    time.textContent = currentLevel;
    timeCount = currentLevel + 1;
    startMatch();
  }
  if (level === "God") {
    inputWord.focus();
    scoreCount = 0;
    message.textContent = "";
    isPlaying = true;
    currentLevel = levels.god;
    time.textContent = currentLevel;
    timeCount = currentLevel + 1;
    startMatch();
  }
}

function displayHighScore() {}
