const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const checkbox = document.querySelector('.checkbox')

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        alert('checked')
    } else {
        alert('unchecked')
    }
})

btn.addEventListener('click', () => {
    alert(input.value)
})
