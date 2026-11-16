//.......................................//

// 1.length - uzunligi
//let lenG = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//let length = lenG.length;

//...............................................//


//2.toupperCase() - harflarni katta harfga o'zgartiradi
//let UPPER = "Hello World!";
//let upperCase = UPPER.toUpperCase();

//..................................................//

//3.toLowerCase() - harflarni kichik harfga o'zgartiradi
//let lower = "Hello World!";       // String
//let lowerCase = lower.toLowerCase();

//................................................//

//4.slice() - qirqib olish
//let slic = "Apple, Banana, Kiwi";
//let slice = slic.slice(7, 13);

//.....................................................//

//5.trim(),trimstart(),trimend() - boshidagi va oxiridagi bo'sh joylarni olib tashlaydi
//trim-----------------------------------
//let trim = "      Hello World!      ";
//let trimmed = trim.trim();
//trimstart--------------------------------
//let trimstart = "     Hello World!     ";
//let trimmedStart = trimstart.trimStart();
//trimend--------------------------------
//let trime = "     Hello World!     ";
//let trimend = trime.trimEnd();


//..................................................//
//6.replace() - almashtirish
//let replace = "Please visit Microsoft!";
//let newText = replace.replace("Microsoft", "W3Schools");

//......................................................//

//7.split() - bo'lish
//text.split(",")
//text.split(" ")
//text.split("")

//.............................................................//


//8.includes() - qidirish
//let includes = "Hello world, welcome to the universe.";
//includes.includes("world");


//..............................................................//


//9.indexOf() - qidirish va indeksini qaytarish
//let indexOf = "Please locate where 'locate' occurs!";
//let index = indexOf.indexOf("locate");


//..............................................................//



//10.concat() - birlashtirish
//let text1 = "Hello";
//let text2 = "World";
//let text3 = text1.concat(" ", text2);


//................................................................//

//11.charAt() - belgini olish
//let charAt = "HELLO WORLD";
//let char = charAt.charAt(0);


//............................................................//


//12.startsWith() - boshlanishini tekshirish
//RETURNS true---------------------------------------
//let startsWith = "Hello world, welcome to the universe.";
//startsWith.startsWith("Hello");
//RETURNS false--------------------------------------
//let startsWit = "Hello world, welcome to the universe.";
//startsWit.startsWith("world")


//.................................................................//



//13.endsWith() - tugashini tekshirish
//let endsWith = "John Doe";
//endsWith.endsWith("Doe")


//..........................................................//

//14.repeat() - takrorlash
//let text = "Hello world!";
//let result = text.repeat(2);


//.................................................................//

//15.substr() - qirqib olish (boshlanish indeksi va uzunlik bilan)
//let str = "Apple, Banana, Kiwi";
//let part = str.substr(7, 6)


//.............................................................//

//16.async -sinxrom emas , kutib turish


//........................................................//
//17.synxrom - sinxrom , kutib turish


//......................................................//

// FUNCTION
//1. Function - declaration

//2.parametr - funksiyaga kiruvchi ma'lumot
//kodni takrorlamaslik
//function myFn(a,b){
//  return a *b ;
//}
//console.log(myFn(2,4));
//console.log(myFn(4,5));
//console.log(myFn(5,6));

//3.Function expression
//const newFN = function(a,b) {
//  return a + b ;
//}
//console.log(newFN(10,20));


//4. Arrow function
// const myFn = (a,b) => {
// return a -b;
// }

//const arrFn = a => a * 2;
//5.HOF - (HIGHER ORDER FUNCTION )- parametr sifatida boshqa bir function qaytgan qiymatni oladi
//function getRandomNumber(num){
//  return Math.round(Math.random ()*num);
//}

//const firstRomNumber = (Math.ramdom() * 100)
//const secondRomNumber = (Math.ramdom() * 100)
//console.log(FIRSTrANDOMnUMBER);

//function addTwonNums(a, b) {
//  console.log(a,b);

//return a+b,
//}

//console.log(addTwoNums(firstRandomNumber, secondRandomNumber));
//Container elon qilish va stil berish 


//`https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=`;
// myImg.alt = `mountain landscape`;


//7.02.2026yil

//HTTP requests
//Web-Frontend
//1.Ma'lumotlarni UI ga o'girish
//2.Foydalanuvchiddan ma'lumot olish

// API - Application Programming Interface

// 1.GET - ma'lumot olish
// 2.POST -ma'lumot yaratish
// 3.DELETE -ma'lumotni o'chirish 
// 4.PUT -ma'lumotni to'liq o'zgartirish
// 5.PATCH - ma'lumotni qisman o'zgartirish


//  async function getData() {
//    await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => console.log(response))
//     .then(json => console.log(json))

// }

// getData();

// function sayHello() {
//    console.log("Hi");
// }


// sinxrom-kutib turish +
// {JSON} Placeholder


// function createNewResource(){
//     await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             userId: 1,
//             body:"Lorem text",
//             title:"Post title",
//         }),
//         headers:{
//             "Content-type": "application/json; charset=UTF-8",
//     }
//     then((response)=> response.json())
//     .then((json)=>console.log(json)
//     )
// }
// createNewResource(); 


// async function createNewResource() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
//         method: 'POST',
//         body: JSON.stringify({
//             userId: 1,
//             body: "Lorem text",
//             title: "Post title",
//         }), 
//         headers: {
//             "Content-type": "application/json; charset=UTF-8",
//         }
//     });

//     const json = await response.json();
//     console.log(json);
// }

// createNewResource();




// 9.02.2026y



//Dynamic type - JS, Python, Ruby
// let num = 10 // Number, Int
// let text = `string`
//Static type
//let num2 = 10;

//function sayHello(userName) {
// return `Hello, ${userName}`
// }

//sayHello(10)

//Async - sinxrom emas, kutib turish
//Synxron-sinxrom, kutib tuish

// let num = 10; //9,8,7,6,5,4,3,2,1,0

// while(num >= 0) {
//     console.log(num);


// }

//11.02.2026y



//1. Function declaraton

//parametr-funksiyaga kiruvchi ma'lumot
//kodni takrorlamaslik
// function myFn(a,b) {
//     return a * b;
// }

// console.log(myFn(2,4));
// console.log(myFn(4,5));
// console.log(myFn(5,6));

// //2.Function expression
// const newFn = function(a,b) {
//     return a + b;
// }

// console.log(newFn(10,20));



// //3.Arrow funtion

// //const myFn2 = (a,b) => {
//     // return a - b;
//     //}

//     const arrFn = a => a * 2;

//     //4.HOF -(Higher Order Funtion) -paramert sifatida boshqa bir function qaytgan qiymatni oladi.        

//     function getRandomNumeber(num){
//         return Math.round(Math.random () * num);
//     }
//     const firstRandomNumber = (Math.ramdom() * 100)
//     const secondRandomNumber = (Math.random() * 100)
//     console.log(firstRandomNumber);

//     function addTwoNums(a,b) {
//         console.log(a,b);

//         return a+b;
//     }    

// console.log(addTwoNums(firstRandomNumber, secondRandomNumber));

// //5. IIFE - Immediately Invoked Function Expression 
// (function(str){
//     console.log(str);
// }) ("IIFE");



// 13.02.2026yil


//DOM-document object model-html elementlarini js orqali boshqarish imkonini beradi.




// //getElementByTagName-elementlarni teg nomi orqali olish
// let texts = document.getElementsByTagName(`p`);
// console.log(texts);

// //getElementById
// let textByID = document.getElementById(`myID`);
// console.log(textByID);

// //getElementByClassName
// let textByClass = document.getElementsByClassName(`text`);
// console.log(textByClass);

// //querySelector-elementlarni css selector orqali olish

// let newText = document.querySelector(".text");
// console.log(newText);
// let myText = document.querySelectorAll(`.text`)


// let body = document.querySelector(`body`);
// //CreatElement

// let title = document.createElement(`h1`);
// title.innerText = `hello world title`;

// body.append(title);

// let myImg = document.createElement(`img`);
// myImg.src =

// //18.02.2026yil

// // Container e'lon qilish  va stile berish 
// const container = document.createElement(`div`);
// container.style.width = `100%`;
// container.style.height = `100vh`;
// container.style.backgroundColor = `lightblue`;

// body.append(container);

// // Grid e'lon qilish va stile berish
// container.style.display = `grid`;
// container.style.gridTemplateColumns = `repeat(3, 1fr)`;
// container.style.gridTemplateRows = `repeat(3, 1fr)`;
// container.style.gap = `10px`;

// // Box larni yaratish va stile berish
// for(let i = 1; i <= 9; i++) {
//     const box = document.createElement(`div`);
//     box.style.backgroundColor = `white`;
//     box.style.display = `flex`;
//     box.style.justifyContent = `center`;
//     box.style.alignItems = `center`;
//     box.style.fontSize = `24px`;
//     box.innerText = i;
//     container.append(box);
// }
// // Box larni grid ga joylashtirish
// const boxes = container.children;
// boxes[0].style.gridArea = `1 / 1 / 2 / 2`;
// boxes[1].style.gridArea = `1 / 2 / 2 / 3`;
// boxes[2].style.gridArea = `1 / 3 / 2 / 4`;

///////////20.02.2026y///////////////

//BOM-Browser Object Model -brauzerning ozini boshqarish imkonini beradi . javacriptda window obyekti orqali brauzerning ozini boshqarish mumkn.

//Screen - brauzer oynasining olchamlari va xususiyatlari haqida malumot beradi.
//nsole.log(window.screen.width); -  //ekranning uzunligi 
//console.log(window.screen.height); -  //ekranning balandligi
//console.log(window.screen.availHeight); - // ekranning foydalanish mumkin bolgan balandligi
//console.log(window.screen.availWidth); - // ekranning foydalanish mumkin bolgan uzunligi 
//console.log(window.screen.colorDepth);  // ekranning rang chetligi 
     





























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































