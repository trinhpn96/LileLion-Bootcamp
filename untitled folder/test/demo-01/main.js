

let number = [];
document.querySelector(".submit").onclick = function () {
  let input = document.querySelector(".input").value;
  number.push(input);
  document.querySelector(".output").innerHTML = number;
};

// bai 1 
document.querySelector(".submit1").onclick = function () {
  let output = "";
  let input = document.querySelector(".output").value;
  number.push(input);
  for (let i = 0; i < number.length; i++) {
    let Number = number[i];
    if (Number > 0 && Number % 1 == 0) {
      output = output + " " + Number;
    }
  }
  document.querySelector(".output1").innerHTML = output;
};

// bai 2 
document.querySelector(".submit2").onclick = function () {
  let output = number[0];
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    let Number = number[i];
    if (Number > 0) {
      count++;
    }
    output = count;
  }
  document.querySelector(".output2").innerHTML = output;
};

// bai 3 
document.querySelector(".submit3").onclick = function () {
    let output = -1;
    let lowest = number[0];
    for (let i = 1; i < number.length; i++) {
      if (number[i] >= 0) {
        lowest = number[i];
        break;
      }
    }
    for (let i = 0; i < number.length; i++) {
      if (number[i] >= 0 && number[i] <= lowest) {
        lowest = number[i];
      }
    }
    output = lowest;
    document.querySelector(".output3").innerHTML = output;
  };


  //bai 4