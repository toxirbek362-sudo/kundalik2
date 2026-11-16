let body = document.querySelector('body')
let h1 = document.querySelector('h1')
let h2 = document.querySelectorAll('h2')
let img = document.createElement('img')
let btn = document.querySelector('button')
h1.textContent = 'Hello World!'
h2.textContent = 'Hello World!!!!'
img.setAttribute('src', './image.jpg')
img.setAttribute('alt', 'image')

body.appendChild(img)


btn.addEventListener('click', () => {
    let a = Math.round(Math.random() * 9)
    let b = Math.round(Math.random() * 9)
    console.log(a*b)
})