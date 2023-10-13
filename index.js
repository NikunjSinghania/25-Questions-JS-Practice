const str = "hello there";
let result = "";
str.split(" ").map((e) => {
  result += e.split("").reverse().join("") + " ";
});

console.log(result);

console.log(Array.isArray([]));
console.log(Array.isArray({}));

let arr = [1, 2, 3, 4, 56];
// arr.length = 0 //ALSO WORKS
console.log(arr.splice(arr.length));

console.log(Number.isInteger(1));
console.log(Number.isInteger(1.32));

if (1 % 1) {
  console.log("Decimal");
} else {
  console.log("Integer");
}

arr = [1, 2, 3, 4];

console.log(arr.concat(arr));
arr = [...arr, ...arr];
console.log(arr);



