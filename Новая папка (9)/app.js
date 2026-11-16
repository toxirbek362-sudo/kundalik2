const form = document.querySelector('.form');
const input = document.querySelector('.input');
const checkbox = document.querySelector('.checkbox');
const btn = document.querySelector('.btn');
const content = document.querySelector('.content')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    content.innerHTML = `<p>${input.value}</p>`
    input.classList
})

