// 1. Variables Declaration 

let time = document.querySelector(".time");
let greeting = document.querySelector(".greeting");
let myName = document.querySelector(".my-name");
let myFocus = document.querySelector(".my-focus");


// 2. add Function to get the current time 
function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

  // 3. Replace the time with current (hh:mm:ss)
  time.innerText = `${hour}:${addZero(minute)}:${addZero(second)}`;
  setTimeout(showTime, 1000);
}
// add zero
function addZero(number) {
  return number < 10 ? "0" + number : number;
}
showTime();


// 4. add Function to change the background and text (color, opacity, size, position, inner text)
//  corresponding with current time 
// (using if...else... statement):

function showBackground() {
  let today = new Date();
  let hour = today.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage =
      "url(../img/__original_drawn_by_dankalaning__7ee7809040cfba33a46f7391ee333d7f.jpeg)";
    document.body.style.color = "#f1f1f1";
    document.body.style.opacity = "0.9";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    greeting.innerText = "Good Morning, ";
  } else if (hour < 13) {
    document.body.style.backgroundImage = "url(../img/noon.png)";
    document.body.style.color = "#f1f1f1";
    document.body.style.opacity = "0.9";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    greeting.innerText = "Have a nice day, ";
  } else if (hour < 18) {
    document.body.style.backgroundImage = "url(../img/sunset.jpeg)";
    document.body.style.color = "#f1f1f1";
    document.body.style.opacity = "0.9";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    greeting.innerText = "Good Afternoon, ";
  } else if (hour < 25) {
    document.body.style.backgroundImage =
      "url(../img/istockphoto-672324040-612x612.jpeg)";
    document.body.style.color = "#f1f1f1";
    document.body.style.opacity = "0.9";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    greeting.innerText = "Good Night, ";
  }
}
showBackground();


// 5. Add function to set the inputable name and status in default and normal

function getName() {
  if (localStorage.getItem("name") === null) {
    myName.innerText = "[Enter your Name]";
  } else {
    myName.innerText = localStorage.getItem("name");
  }
}

// 6. Adding event to navigate when user input text,
// using function to set the name and blur/ focus the cursor : 
myName.addEventListener("keydown", setName);

//set name
function setName(event) {
  if (event.key === "Enter") {
    localStorage.setItem("name", event.target.innerText);
    myName.blur();
  } else {
    myName.focus();
  }
}
getName();


// GET TEXT
function focusInput() {
  if (localStorage.getItem("focus") === null) {
    myFocus.innerText = "[i.e: Feed my cat, etc.] ";
  } else {
    myFocus.innerText = localStorage.getItem("focus");
  }
}

//event
myFocus.addEventListener("keydown", setFocus);

//set Focus:
function setFocus(e) {
  if (e.key === "Enter") {
    localStorage.setItem("focus", e.target.innerText);
    myFocus.blur();
  } else {
    myFocus.focus();
  }
}
focusInput();