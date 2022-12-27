// document.querySelector("button").addEventListener("mouseenter", sayHello);

// function sayHello() {
//   alert("Hello");
// }

// function sayBye() {
//   console.log("Bye!");
// }

// function arrToObj(arr) {
//   return arr.reduce((res, val) => {
//     res[val[0]] = val[1];
//     return res;
//   }, {});
// }

// // Expected results:
// var arr = [
//   ["name", "Sơn Đặng"],
//   ["age", 18],
// ];
// console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

// let arr = ["Rosie", "Mint", "Vani", "Baby"];

// let arr = [1, 3, 5, 2, 9];
// // create reduce() method
// Array.prototype.reduceDemo = function (callback, result) {
//   let arrLength = this.length;

//   for (let i = 0; i < arrLength; i++) {
//     if (arguments.length < 2) {
//       i = 1;
//       result = this[0];
//     }
//     result = callback(result, this[i], i, this);
//   }
//   return result;
// };

// let newArr = arr.reduceDemo(function (result, curr) {
//   return result + curr;
// }, 15);
// console.log(newArr);

// let newArr = arr.map((name) => `Hello ${name}`);
// console.log(newArr);

// create Map() method
// Array.prototype.mapDemo = function (callback) {
//   let output = [];
//   let arrLength = this.length;

//   for (let i = 0; i < arrLength; ++i) {
//     let result = callback(this[i], i);
//     output.push(result);
//   }
//   return output;
// };

// let newArr = arr.mapDemo((name) => `Hello ${name}`);
// console.log(newArr);

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let posA = apples.map((p) => p + a);
  let posB = oranges.map((p) => p + b);
  console.log(posA, posB);
  let resA = 0;
  let resB = 0;

  for (let i = 0; i < posA.length; i++) {
    if (s <= posA[i] <= t) {
      resA++;
    } else {
      resA = resA;
    }
  }
  console.log(resA);

  for (let i = 0; i < posB.length; i++) {
    if (s <= posB[i] <= t) {
      resB++;
    } else {
      resB = resB;
    }
  }
  console.log(resB);
  // console.log(resA, resB);
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
