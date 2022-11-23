// Var Declaration
let messageElement = document.getElementById("message");

// get random number
let randomNumber = getRandomNumber();

function getRandomNumber() {
  return Math.ceil(Math.random() * 100);
}

console.log(randomNumber);

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

// setting
// recognition.lang = "en_US";
recognition.lang = "vi_VN";
// recognition.lang = "ko_KR";
// recognition.lang = "ja_JP";

recognition.start();

// event
recognition.addEventListener("result", onSpeak);
recognition.addEventListener("end", () => {
  recognition.start();
});

// get user speak
function onSpeak(event) {
  // console.log(event);

  let message = event.results[0][0].transcript;
  console.log(message);

  writeMessage(message);
  checkNumber(message);
}

// write user message
function writeMessage(message) {
  messageElement.innerHTML = `
    <div>You said:</div>
    <span class="box">${message}</span>
    <div></div>
  `;
}

function checkNumber(message) {
  // console.log(typeof message);
  // console.log(typeof randomNumber);

  number = Number(message);
  // console.log(typeof number);

  if (isNaN(number)) {
    messageElement.innerHTML = `
      <div>That is not a number</div>
    `;
  }

  if (number > 100 || number < 1) {
    messageElement.innerHTML = `
      <div>Number must be between 1 ~ 100</div>
    `;
  }

  if (randomNumber > number) {
    messageElement.innerHTML += `<div>Go higher!</div>`;
  } else if (randomNumber < number) {
    messageElement.innerHTML += `<div>Go lower!</div>`;
  } else if (randomNumber === number) {
    messageElement.innerHTML = `
      <h2>
        You have guessed the number
        <br />
        <br />
        It was ${number}
      </h2>
      <button class="button" id="button">Play Again</button>
    `;
  }
}

// event
document.body.addEventListener("click", (event) => {
  if (event.target.id === "button") {
    window.location.reload();
  }
});