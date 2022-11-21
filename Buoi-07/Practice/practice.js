// 1. Variables Declaration

// 2. add Function to get the current time

// 3. Replace the time with current (hh:mm:ss)

// 4. add Function to change the background and text (color, opacity, size, position, inner text)
//  corresponding with current time
// (using if...else... statement):

// 5. Add function to set the inputable name and status in default and normal

// 6. Adding event to navigate when user input text,
// using function to set the name and blur/ focus the cursor :

// let textInput = document.querySelector(".input");
// let list = document.querySelector(".p");

let text = [];

document.querySelector(".submit").onclick = function () {
  let input = document.querySelector(".input").value;
  text.push(input);
  document.querySelector(".p").innerHTML = text.toString();
};
