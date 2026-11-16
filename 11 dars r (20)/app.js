console.log(parseInt('100rem'));  // butun songa ogirish
console.log(parseFloat('12.5em'));  // qoldiqli | haqiqiy songa ogirish

// max 
console.log(Math.max(1, 2, 3, 4, 5, 6, 7,));
// min 
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, -1));
//pow - sonni darajaga oshirish
console.log(Math.pow(2, 10));
console.log(2 ** 10);
//abs - absolut qiymat
console.log(Math.abs(-345));

//random - tasodifiy son
const randomNumberOne = Math.round(Math.random() * 1000);
console.log(randomNumberOne);

//Number.isFinite - cheksiz yoki NaN emasligini tekshiradi
console.log(Number.isFinite(75632));
console.log(Number.isFinite(Infinity));

// Number.isInteger - butun sonligini tekshiradi  
console.log(Number.isInteger(10));
console.log(Number.isInteger(12.5));

// Number.isSafeInteger - xavfsiz butun sonligini tekshiradi 
// 9007199254740991 - JavaScriptda xavfsiz butun sonlarning max qiymati
console.log(Number.isSafeInteger(9007199254740991));
console.log(Number.isSafeInteger(90071992547409934));  
