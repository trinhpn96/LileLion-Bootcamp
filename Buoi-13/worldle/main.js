let answer = "crush";
let button = document.querySelector(".button");

button.addEventListener("click", play);

function play() {
  let userInput = document.querySelectorAll(".input");
  // console.log(answer[0], userInput[0].value);

  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i].value === answer[i]) {
      userInput[i].style.backgroundColor = "#6aaa64";
    } else if (answer.includes(userInput[i].value)) {
      userInput[i].style.backgroundColor = "#c9b458";
    } else {
      userInput[i].style.backgroundColor = "#787c7e";
    }
  }
}
