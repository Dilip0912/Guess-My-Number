"use script";

//When click events happen in our program,
//the function(Event handler) that contain the code which
//is to be executed when click events happen.
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 8;
let highscore = 5;

const inputField = document.querySelector(".num")
const submitButton = document.querySelector(".check")
const scoreBox = document.querySelector(".score")
const startBox = document.querySelector(".start")
const againStart = document.querySelector(".again")

inputField.addEventListener('input', () => {
  const inputValue = inputField.value
  submitButton.disabled = inputValue === ''
})

function computation() {
  const guess = Number(inputField.value);
  if (guess === secretNumber) {
    startBox.textContent = "Correct number";
    document.querySelector(".number").textContent = guess;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".hscore").textContent = highscore;
    }
    document.querySelector('body').style.backgroundColor = 'orangered';
  }
  else if (guess !== secretNumber) {
    if (score > 1) {
      startBox.textContent = guess > secretNumber ? 'Low number please' : 'High number please';
      score--;
      scoreBox.textContent = score;
    }
    else {
      startBox.textContent = "You lost the game.";
      scoreBox.textContent = 0;
    }
  }
}

submitButton.addEventListener("click", computation);
inputField.addEventListener("keypress", function (event) {
  if (event.key === 'Enter') {
    // console.log('Enter key pressed!');
    computation(); // Call the click event handler when Enter is pressed
  }
});

againStart.addEventListener("click", function(){
  location.reload();
})