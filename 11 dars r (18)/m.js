//type conversion - bir turdagi ma'lumotni boshqa turdagi ma'lumotga o'girish
//1.string to number
let str  = '123'//string
console.log(str);
console.log(number(str));
console.log(+str);
console.log(number('hii'));


//number to string
let num = 123 //number
console.log(string(num));
console.log(num.toString());
console.log(`${num}`); ////// template literals


// boolean 
console.log(boolean('string')); //true, chunki string bo'sh emas
console.log(boolean('')); //false, chunki string bo'sh
console.log(boolean(0)); //false, chunki 0 qiymati falsy
console.log(boolean(1)); //true, chunki 1 qiymati truthy
console.log(boolean(null)); //false, chunki null falsy
console.log(boolean(undefined)); //false, chunki undefined falsy
console.log(boolean(NaN)); //false, chunki NaN falsy
console.log(-1);