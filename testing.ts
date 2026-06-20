const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const condition = 3;

let find = arr.find((item) => {
    return item === condition;
});
console.log("find", find);

let sortedAscending = [...arr].sort((a, b) => a - b);
let sortedDescending = [...arr].sort((a, b) => b - a);

console.log(sortedAscending);
console.log(sortedDescending);

let filtered = arr.filter((item) => {
    return item > condition;
});
console.log("filter", filtered);

let mapped = arr.map((item) => {
    return item * 2;
});
console.log("mapped", mapped);

let every = arr.every((item) => {
    return item > 0;
});
console.log("every", every);

const reduced = arr.reduce((total,cur):number => {
    return total+cur
},) 
console.log(reduced)