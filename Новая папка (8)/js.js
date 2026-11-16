const form = document.querySelector('.form');
const input = document.querySelector('.input');
const checkbox = document.querySelector('.checkbox');
const btn = document.querySelector('btn');
const content = document.querySelector('.content');

form.addEventListener('submit', (e) => {
    console.log('a');
    e.preventDefault();
    content.innerHTML= `
    <p class="text">${input.value}</p>
    `;
});

checkbox.addEventListener('change', () => {
    input.classList.toggle('active')
    alert('checked')
})
