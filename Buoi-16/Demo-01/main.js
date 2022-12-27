// let ahri = {
//   name: "Ahri",
//   q: "orb",
//   w: "fox fire",
//   e: "charm",
// };

// let amumu = {
//   name: "Amumu",
//   q: "bandage toss",
//   w: "despair",
//   e: "tantrum",
// };

// 1. Create a class to create object later /
// function machine(name, skill_1, skill_2, skill_3) {
//   this.name = name;
//   this.q = skill_1;
//   this.w = skill_2;
//   this.e = skill_3;
// }

// let ahri = new machine("Ahri", "orb", "fox fire", "charm");
// console.log(ahri);

// let amumu = new machine("Amumu", "bandage toss", "despair", "tantrum");
// console.log(amumu);

class Hero {
  constructor(name, skill_1, skill_2, skill_3) {
    this.name = name;
    this.q = skill_1;
    this.w = skill_2;
    this.e = skill_3;
  }
}

let ahri = new Hero("Ahri", "orb", "fox fire", "charm");
