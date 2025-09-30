// rest
const num = [10, 20, 30, 40]
const [f, s, ...other] = num

console.log(f)
console.log(s)
console.log(other)


// spread operator
console.log("spread operator")
const a = [1, 2, 3, 4]
const b = [8, 9]
const c = [...a, ...b]
console.log(a)
console.log(b)
console.log(c)