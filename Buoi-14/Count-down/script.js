let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

// Update the count down every 1 second
setInterval(countdown, 1000);

function countdown() {
    let today = new Date();
    let currentYear = today.getFullYear();
    let newYear = new Date(`Jan 01 ${currentYear + 1} 00:00:00`);
    let diff = (newYear - today) / 1000;
    console.log(diff);
    

  //   // Time calculations for days, hours, minutes and seconds
  let d = Math.floor(diff / 60 / 60 / 24);
  let h = Math.floor(diff / 60 / 60) % 24;
  let m = Math.floor(diff / 60) % 60;
  let s = Math.floor(diff % 60);

  console.log(d, m, h, s);

  days.innerText = d;
  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;

  //   setTimeout(countdown, 3000);
}

// }
countdown();
