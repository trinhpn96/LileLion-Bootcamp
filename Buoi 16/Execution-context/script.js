// n1 = "N1";
// var v1 = "V1";
// let l1 = "L1";
// const c1 = "C1";
// console.log(n1, v1, l1, c1);
// console.log(window.n1, window.v1, window.l1, window.c1);

// function fn2() {
//   n3 = "N3";
//   console.log(n1, n2, n3);
//   var v3 = "V3";
//   console.log(v1,v3);

//   let l3 = "L3";
//   console.log(l1,l3);

//   const c3 = "C3";
//   console.log(c1,c3);

// }

// function fn1() {
//   n1 = "N1";
//   var v1 = "V1";
//   let l1 = "L1";
//   const c1 = "C1";

//   fn2();
// }

// fn1();
// console.log(n3);

n1 = "N1";
var v1 = "V1";
let l1 = "L1";
const c1 = "C1";
console.log(n1, v1, l1, c1);
console.log(window.n1, window.v1, window.l1, window.c1);
function fn2() {
  n3 = "N3";
  console.log(n1, n2, n3);
  var v3 = "V3";
  console.log(v1, v3);
  let l3 = "L3";
  console.log(l1, l3);
  const c3 = "C3";
  console.log(c1, c3);
}
function fn1() {
  n2 = "N2";
  var v2 = "V2";
  let l2 = "L2";
  const c2 = "C2";
  fn2();
}
fn1();
console.log(n3);
