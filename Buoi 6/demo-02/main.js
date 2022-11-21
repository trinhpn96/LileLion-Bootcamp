// Change Style Mode

// let darkBtn = document.querySelector("#dark-btn");
// let lightBtn = document.querySelector("#light-btn");

// darkBtn.addEventListener("click", darkMode);
// function darkMode() {
//   document.body.style.color = "white";
//   document.body.style.backgroundColor = "black";
// }

// lightBtn.addEventListener("click", lightMode);
// function lightMode() {
//   document.body.style.color = "black";
//   document.body.style.background = "white";
// }

// If else

// let score = 70;
// if (score > 90) {
//   console.log("A");
// } else if (score > 80) {
//   console.log("B");
// } else if (score > 70) {
//   console.log("C");
// } else if (score > 60) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// Conditional Ternary Operator :
// ## Syntax:
// **condition ? statement1 : statement 2;**

// ## Exp:
// let age = 25;
// age > 19
// ? console.log ('You can drink Soju')
// : console.log ('You can not drink Soju');

let btn = document.querySelector("#btn");

btn.addEventListener("click", changeMode);

function changeMode() {
  if (btn.textContent === "Dark") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    btn.textContent = "Light";
  }
  else if(btn.textContent === "Light") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    btn.textContent = "Dark";
  }
}


function addNumber() {
  return x + y
}

addNumber()