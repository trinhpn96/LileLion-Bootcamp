let profile = {
  name: "Rosie",
  age: 26,
  bf: false,
  friends: [
    "Joe",
    "Ninn",
    {
      name: "Vanilla",
      age: 25,
    },
    "Mike",
    "Dan",
  ],
  pet: {
    catto: ["Boa", "Uzi"],
    puppies: ["Bekkie", "Rubies"],
  },
};
console.log(profile);
console.log(profile.name);
// or
console.log(profile["bf"]);

//create a new key:
profile["favour color"] = "mint";
console.log(profile["favour color"]);
profile["company"] = "TTVN";
profile.bf = true;
console.log(profile);

profile.company = "Floware";
console.log(profile.company);

// delete a property / key :
delete profile.bf;

//get value of a key from an object nested in an object :
console.log(profile.pet.catto);

// Get data from an array nested in an object:

console.log(profile.friends[0]);
console.log(profile.friends[2].age);

// Add function in an object
let greeting = {
  sayHello: function (name) {
    console.log(`Hello, ${name}`);
  },
  sayBye: function (name) {
    console.log(`Bye, ${name}`);
  },
};

greeting.sayBye("Mint");
let h1 = document.querySelector("h1");
h1.innerHTML = '<h1 style="color: green;">Hello, Mint</h1>';
