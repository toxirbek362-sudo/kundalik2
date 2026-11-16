//function countSheeps(sheep) 
let count = 0;
 for (key of sheep) {
   if (key == true) {
    count = count + 1;
   }
 }
 return count;



console.log(countSheeps([true, true, false, true, true, false]));

function countPositives(nums) {
  let sumOfPositive = 0;
  let countOfNegative = 0;
  for (key of nums) {
    if (key > 0) {
      sumOfPositive = sumOfPositive + key;
    } else {
      countOfNegative = countOfNegative + 1;
    }
  }
  return [sumOfPositive, countOfNegative];
}
console.log(countPositives([1, -5, 3, 5, 6, 8, -10, 5]));
