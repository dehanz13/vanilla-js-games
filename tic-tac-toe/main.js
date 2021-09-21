// VARIABLES
const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const cellElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const winMessageElement = document.getElementById("messageModal");
const winMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);
const restartBtn = document.getElementById("restartBtn");
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let circleTurn;

// EVENT LISTENERS
startGame();
restartBtn.addEventListener("click", startGame);

// FUNCTIONS
function startGame() {
  circleTurn = false;
  cellElements.forEach((cell) => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(CIRCLE_CLASS);
    cell.removeEventListener("click", handleClick);
    // only fire this event once
    cell.addEventListener("click", handleClick, { once: true });
  });
  // set hover states
  setBoardHoverClass();
  winMessageElement.classList.remove("show");
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  // place the mark
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    // switch turns
    swapTurns();
    // set hover states
    setBoardHoverClass();
  }
}

function endGame(draw) {
  if (draw) {
    winMessageTextElement.innerText = `It's a Draw!`;
  } else {
    winMessageTextElement.innerText = `${circleTurn ? "O's " : "X's"} Wins!`;
  }
  winMessageElement.classList.add("show");
}

function isDraw() {
  // need to desctructure cellElements because it doesn't have the every method.
  return [...cellElements].every((cell) => {
    return (
      cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    );
  });
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurns() {
  circleTurn = !circleTurn;
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS);
  } else {
    board.classList.add(X_CLASS);
  }
}

function checkWin(currentClass) {
  // loop over all the combinations
  return WINNING_COMBINATIONS.some((combination) => {
    // for each combination, check if all indexes have same class.
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}
