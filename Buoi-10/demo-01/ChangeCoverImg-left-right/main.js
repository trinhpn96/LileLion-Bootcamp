// Variable declaration:
let images = document.querySelectorAll(".slide"); //-> array type
let arrowLeft = document.getElementById("arrow-left");
let arrowRight = document.getElementById("arrow-right");
let index = 0;

//function reset img display
function reset() {
  // Opt1:
  //   images.forEach(function (item) {
  //     item.style.display = "none";
  //   }); -> not have to edit the number of item in imgs

  // Opt2:
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
}

//function start display 1st img:
function startSlide() {
  reset();
  images[0].style.display = "block";
}

//function show right image
function rightImage() {
  reset();
  images[index + 1].style.display = "block";
  index++;
}

// add event for click right to change img
arrowRight.addEventListener("click", clickRight);

function clickRight() {
  if (index === images.length - 1) {
    index = -1;
  }
  rightImage();
}

//function show left image
// add event for click left to change img
function leftImage() {
  reset();
  images[index - 1].style.display = "block";
  index--;
}

arrowLeft.addEventListener("click", clickLeft);

function clickLeft() {
  if (index === 0) {
    index = images.length;
  }
  leftImage();
}

startSlide();

// Array Methods:
let num = [1, 2, 3, 4];
let names = ["Rosie", "Mint", "Vanilla"];

// .map : return a new array with looping over the array with function
let data = num.map(function (item1) {
  return item1 * 5;
});
console.log(data);

let data2 = names.map(function (item2) {
  return item2 + " is cute!";
});
console.log(data2);

// .filter : return a new array with all element adapted the requirements in function.
let data3 = names.filter(function (item3) {
  return item3.startsWith("R");
});
console.log(data3);

// .some : return Boolean
let data4 = names.some(function (item4) {
  return item4.startsWith("R");
});
console.log(data4);

// .find : return the 1st element adapt the requirements of the function.
let data5 = names.find(function (item5) {
  return item5.startsWith("R");
});
console.log(data5);

// .findIndex : return the index number of the element being seek
let data6 = names.findIndex(function (item6) {
  return item6.startsWith("R");
});
console.log(data6);
