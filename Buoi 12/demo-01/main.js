// let catto = {
//   name: "Boa",
//   age: 3,
// };
// let data = JSON.stringify(catto);
// console.log(data);
// console.log(typeof data);

// let myCat = JSON.parse(data);
// console.log(myCat);
// console.log(typeof myCat);

// fetchAPI
fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    console.log(response);
    console.log(typeof response);

    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(typeof data);
  });
