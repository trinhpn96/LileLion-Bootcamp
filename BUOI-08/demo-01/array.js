let colors = ["red", "green", "blue"];

colors.push("violet");
console.log(colors);


// .forEach()
colors.forEach(function (color) {
  console.log(`I like ${color}`);
}); // => I like red; I like green; I like blue; I like violet


// .map()
colors.map(function (color) {
  return `I like ${color}`;
}); // => ['I like red', 'I like green', 'I like blue', 'I like violet', 'I like hue', 'I like orange', 'I like navy', 'I like mint']


// .filter() :

let nameList = [
  { name: "Rosie", age: 25 },
  { name: "Mint", age: 26 },
  { name: "Hunnie", age: 20 },
  { name: "Lex", age: 34 },
];

let dataName = nameList.filter(function (elm) {
  return elm.name.startsWith("M");
});
console.log(dataName);
// =>
// 0: {name: 'Mint', age: 26}
// length: 1
// [[Prototype]]: Array(0


let dataAge = nameList.filter(function (item) {
  return item.age > 20;
});
console.log(dataAge); 
// => 
// 0: {name: 'Rosie', age: 25}
// 1: {name: 'Mint', age: 26}
// 2: {name: 'Lex', age: 34}
// length: 3
// [[Prototype]]: Array(0)


//.some
let dataNew = nameList.some(function(element) {
    return element.name.startsWith('R');
})
console.log(dataNew); // => true


//.find 

let data5 = nameList.find(function(itemm) {
    return itemm.name.startsWith('R');
})
console.log(data5);


//.findIndex 

let data7 = nameList.findIndex(function(itm) {
    return itm.name.startsWith('R');
})
console.log(data7);