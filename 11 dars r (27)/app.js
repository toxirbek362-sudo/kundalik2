const fruits = ['apple', 'banana', 'orange', 'apricot', 'orange'];

console.log(fruits.indexOf('orange'));

console.log(fruits.lastIndexOf('orange'));

console.log(fruits.includes('apple'));

const myfruits = fruits.find(fruit => fruit.startsWith('a'));

console.log(myfruits);

const myfruit = fruits.findIndex(el => el.startsWith('a'));

console.log(myfruit);

const myfrui = fruits.findLast(el => el.startsWith('a'));

console.log(myfrui);

const myfru = fruits.findLastIndex(el => el.startsWith('a'));

console.log(myfru);

const num = [1,2,3,4,5,6,7,8,9,10];
console.log(Array.isArray(fruits));
console.log(Array.isArray(num));

fruits.forEach(el => {
    console.log(el.toUpperCase());
})

// num.forEach(el => {
//     console.log(Math.pow(el,2));
// });

let toq = [];
let juft = [];


num.forEach(el => {
    if (el % 2 == 0) {
        juft.push(el);
    } else {
        toq.push(el);
    }
});
console.log(`juft ${juft}`);
console.log(`toq ${toq}`);