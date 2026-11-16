// addEventListener('submit') - todo list
// e.preventDefault() - todo list
// addEventListener('change') - todo list
// input.value - todo list
// classList - todo list
// innerHTML - todo list

const form = document.querySelector(".form");
const checkbox = document.querySelector(".checkbox");
const input = document.querySelector(".input");
const span = document.querySelector("span");
const content = document.querySelector('.content')

form.addEventListener("submit", function (e) {
  // form ichidagi submit type li button bosilganda nima qilish kerakligi shu funksiya ichiga yoziladi
  e.preventDefault(); // qayta yuklanish hodisasini o'chiradi
  console.log("submit hodisasi ishladi!");

  console.log(input.value); // input ichidagi qiymatni olish uchun
});

checkbox.addEventListener("change", () => {
  // input type checkbox bo'lgan inputdagi o'zgarishlarni kuzatadi
  console.log("input changed!!!");

  //   span.classList.add('test') // yangi class qo'shadi
  //   span.classList.remove('test') // mavjud class ni o'chiradi

  if (span.classList.contains("test")) {
    // agar span elementi test degan classni o'z ichiga olsa
    span.classList.remove("test");
  } else {
    span.classList.add("test");
  }

  span.classList.toggle("test");

  // add
  // remove
  // contains
  // toggle
});


content.innerHTML = `
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, maxime?</p>
    <span>Lorem ipsum dolor sit amet.</span>
`

// innerHTML - js kod bilan html tag larini yozish uchun



// addEventListener('submit') - todo list
// e.preventDefault() - todo list
// input.value - todo list
// addEventListener('change') - todo list
// classList - todo list
// innerHTML - todo list

// DOM manipulyatsiya,
// hodisalar (addEventListener),
// LocalStorage,
// setTimeout/setInterval,
// Promise, Fetch API,
// async/await, try/catch,
// Class va OOP

const img = document.querySelector("img");
console.log(img.getAttribute("src"));

// localStorage - ichki xotira, saqlangan qiymatlar o'zimiz o'chirmaguncha o'chmaydi
localStorage.setItem("student", "Gulruxsora"); // ichki xotiraga ma'lumot saqlash
console.log(localStorage.getItem("student")); // bir qiymatni olish
localStorage.removeItem("student"); // bir qiymatni o'chirish
localStorage.clear(); //  localStorage ni to'liq o'chirib tashlash

// setTimeOut -  ma'lum vaqt davomida kutib turuvchi va keyin ishlovchi funksiya
const myTimeOut = setTimeout(() => {
  console.log("message!");
}, 3000);

// ma'lum vaqt oralig'ida qayta-qayta ishlovchi funksiya
const myInterval = setInterval(() => {
  console.log("interval message!");
}, 1000);

clearInterval(myInterval); // setInterval ni to'xtatuvchi funksiya
clearTimeout(myTimeOut); // setTimeOut ni to'xtatuvchi funksiya

const myFirstPromise = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    console.log("promise ishladi");
  } else {
    console.log("promise ishlamadi");
  }
});

myFirstPromise
  .then((res) => console.log(res))
  .catch((error) => console.log(error))
  .finally(() => console.log("done"));

async function getData() {
  await fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err))
    .finally("fetch finished");
}

getData();

async function try_catch_fn() {
  try {
    await fetch("https://jsonplaceholder.typicode.com")
      .then((res) => res.json())
      .then((json) => console.log(json));
  } catch (error) {
    console.log('error');
  } finally {
    console.log("finally");
  }
}


try_catch_fn()

 