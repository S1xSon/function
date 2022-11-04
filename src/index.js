const b = [1, 2];

for (let i = 0; i < b; i++) {
  console.log(b[i]);
}
console.log(b);

var a = ["Hello", "World"];
var c = b.length;
for (var e = 0; e < c; e++) {
  console.log(a[e]);
}

let fruits = ["orange", "apple", "mango"];

for (let fruit of fruits) {
  console.log(fruit);
}

fruits.push("banana");
fruits.unshift("banana");
fruits.pop();
fruits.shift();
console.log(fruits);

// multidimension
let d = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(d[0][0]);
console.log(d[0][1]);
console.log(d[0][2]);
console.log(d[1][0]);
console.log(d[1][1]);
console.log(d[1][2]);
console.log(d[2][0]);
console.log(d[2][1]);
console.log(d[2][2]);

// sortirovka JS
var array = ["Bob", "Bully", "Amy"];
array.sort();
console.log(array);

//functii
function HelloWorld() {
  console.log("Hello world");
}

HelloWorld();

function f() {
  let message = "hi";
  console.log(message);
}
f();

let g = "Pirivet Mir";

function u() {
  console.log(g);
}
u();

function h(message) {
  console.log(message);
}

h("Draste");

function multiply(a, b) {
  console.log(a * b);
}

multiply(4, 3);

function multiplay(a, b = 1) {
  return a * b;
}
let result = multiplay(5);
console.log(result);

//object
let pet = {
  name: "Lulu",
  age: 9,
  sound: "MAu Mau",

  makeSound() {
    console.log(this.sound);
  }
};
pet.souund = "MEU";

console.log(pet);
console.log(pet.name);
console.log(pet.age);
console.log(pet.souund);
pet.makeSound();
