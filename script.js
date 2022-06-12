"use script";

// console.log(document.querySelector('.again').textContent);
// console.log(document.querySelector('.start').textContent='correct Number!')
// document.querySelector('.num').value=23

//When click events happen in our program,
//the function(Event handler) that contain the code which
//is to be executed when click events happen.
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = secretNumber;
let score=8;
let highscore=5;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".num").value);
  if (!guess) {
    document.querySelector(".start").textContent = "You win";
  }else if(guess===secretNumber){
    document.querySelector(".start").textContent = "Correct number";
    document.querySelector(".number").textContent = guess;
    // score++;
    if(score>highscore){
        highscore=score;
        document.querySelector(".hscore").textContent = highscore;     
    }
    document.querySelector('body').style.backgroundColor='orangered';
  }
  else if(guess!==secretNumber)
  {
    if (score > 1) {
        document.querySelector(".start").textContent = guess>secretNumber? 'Low number please':'High number please';
        score--;
        document.querySelector(".score").textContent = score;
      } else {
          document.querySelector(".start").textContent = "You lost the game.";
          document.querySelector(".score").textContent = 0;
  }
//    else if (guess > secretNumber) {
    // if (score > 1) {
    //   document.querySelector(".start").textContent = "Low number please!";
    //   score--;
    //   document.querySelector(".score").textContent = score;
    // } else {
    //     document.querySelector(".start").textContent = "You lost the game.";
        // document.querySelector(".score").textContent = 0;
    }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//         document.querySelector(".start").textContent = "High number please!";
//         score--;
//         document.querySelector(".score").textContent = score;
//       } else {
//           document.querySelector(".start").textContent = "You lost the game.";
//           document.querySelector(".score").textContent = 0;
//       }
//   }
});
