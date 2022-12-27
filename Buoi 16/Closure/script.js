// let l1 = "L1";

// function fn1() {
//   function fn2() {
//     function fn3() {
//       let l4 = "L4";
//       console.log(l1, l2, l3, l4);
//     }
//     let l3 = "L3";
//     console.log(l1, l2, l3);
//     fn3();
//   }
//   let l2 = "L2";
//   console.log(l1, l2);
//   fn2();
// }

// fn1();

// Callback / 1st class citizen / Closure

function addNumber(addNumberValue) {
  function ihihi(add1Value) {
    return addNumberValue + add1Value;
  }
  return ihihi;
}

let add1 = addNumber(1);
console.log(add1(2)); //2
console.log(add1(3)); //3

// let add2 = addNumber(2);
// console.log(add2(1));//3
// console.log(add2(2));//4

let info = {
  name: "Rosie",
  age: 26,
  add: "HCM city, VN",
};

console.log(info.name); //'Rosie';
console.log(info["name"]); //'Rosie';
let a = "age";
console.log(info[a]); //26;
