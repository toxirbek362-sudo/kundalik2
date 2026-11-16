// DOM - document Object Model
// JS yordamida HTML elementiga ulanish


// ID yordamida ulanish
// const title = document.getElementById('myTitle') // 1 dona element


// class yordamida ulanish
// const titleClass = document.getElementsByClassName('title') // ko'p element
// console.log(titleClass);


// HTML teg yordamida ulanish 
// const titleHTML = document.getElementsByTagName('h2')
// console.log(titleHTML);

// QuerySelector
// const title = document.querySelector('h2') // bir dona element
// console.log(title);

// const allTitle = document.querySelector('.title') // ko'p element
// console.log(allTitle);

// JS yordamida HTML teg yasash

// const body = document.querySelector('body')
// console.log(body);

// const url ='https://m.media-amazon.com/images/I/71RWw4rR6LL._AC_UF894,1000_QL80_.jpg'

// const img = document.createElement('img')
// img.setAttribute('src', url)
// img.setAttribute('alt', 'nature img')
// body.append(img)

//querySelector
const el = document.querySelector('p')
console.log(el);

const title = document.querySelectorAll('p')
console.log(title)

// textContent
let h1 = document.querySelector('h1')
h1.textContent = 'hello'

// createElement
const img = document.createElement('img')
img.setAttribute('src' , 'rasm.jpg')

// math.ramdom
console.log(Math.random())

console.log(Math.round(4.5))

// addEventListener
const btn = document.querySelector('button')
btn.addEventListener('click', () => {console.log('hello bro')});


// createElement
const img = document.createElement('img')
img.setAttribute('src', 'rasm.jpg')

// body ni ulash
const body = document.querySelector('body')
body.appendChild(img)