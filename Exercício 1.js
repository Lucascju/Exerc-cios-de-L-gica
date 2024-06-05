let array = [
  1, 34, -2, 40, 60, 20, 12, 43, 5, 2, 5, 6, 1, 70, 18, 20, 21, 6, 15,
];
let numerosPares = array.filter(function (num) {
  return num % 2 === 0;
});
console.log(numerosPares);
