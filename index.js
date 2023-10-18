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

let num = 123;

let ans = parseFloat((num + "").split("").reverse().join(""));
ans = parseFloat(num.toString().split("").reverse().join(""));
ans = Number(num.toString().split("").reverse().join(""));

console.log(ans);

const s = "ababa";
const ps = s.split("").reverse().join("");

console.log(s === ps);

function alp(s) {
  return s.split("").sort().join("");
}

console.log(alp("qf23fegweweewe"));

let capss = "";
function cap(s) {
  s.split(" ").forEach((e) => {
    capss += e[0].toUpperCase() + e.substr(1) + " ";
  });
  return capss;
}

console.log(cap("hello there"));

let obj = {};
function occ(s) {
  s.split("").forEach((e) => {
    if (obj.hasOwnProperty(e)) obj[e]++;
    else obj[e] = 1;
  });

  return obj;
}

console.log(occ("wfqefnqejqjfnvewfhwe"));
