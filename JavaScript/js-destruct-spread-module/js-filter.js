const number = [1, 2, 3, 4, 5, 6, 7, 8];
const oddNo = number.filter((num) => {
  return num % 2 != 0;
});

console.log(number)
console.log("\n\n")
console.log(oddNo)
console.log("\n\n")
console.log(number)
console.log("\n\n")

// const number = [1, 2, 3, 4, 5, 6, 7, 8];
const even = number
.filter((num) => num % 2 === 0)
.map((n) => n * n)
.reduce((n, count) => n + count, 0);
console.log(even);
