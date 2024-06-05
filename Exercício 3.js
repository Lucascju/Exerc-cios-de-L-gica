let array = [
  1, 34, -2, 40, 60, 20, 12, 43, 5, 2, 5, 6, 1, 70, 18, 20, 21, 6, 15,
];

let meio = Math.ceil(array.length / 2);
let arrayA = array.slice(0, meio);
let arrayB = array.slice(meio);

let arraySoma = arrayA.map((num, index) => num + (arrayB[index] || 0));

console.log("Array A:", arrayA);
console.log("Array B:", arrayB);
console.log("Array Soma:", arraySoma);
