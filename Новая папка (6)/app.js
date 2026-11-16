// addEventListener('submit') - todo list
// e.preventDefault() - todo list
// classList - todo list
// innerHTML - todo list
// input.value - todo list
// addEventListener('change') - todo list

const form = document.getElementById('todoForm');
const input = document.getElementById('todoInput');
const list = document.getElementById('todoList');

// FORM SUBMIT
form.addEventListener('submit', function (e) {

  // Sahifa reload bo‘lishini to‘xtatadi
  e.preventDefault();

  // input qiymatini olish
  const text = input.value;

  // bo‘sh input tekshirish
  if (text.trim() === '') {
    alert("Matn kiriting!");
    return;
  }

  // yangi li yaratish
  const li = document.createElement('li');

  // innerHTML ishlatish
  li.innerHTML = `
    <input type="checkbox" class="check">
    <span>${text}</span>
  `;

  // ul ichiga qo‘shish
  list.appendChild(li);

  // checkbox olish
  const checkbox = li.querySelector('.check');

  // CHANGE EVENT
  checkbox.addEventListener('change', function () {

    // class qo‘shish/o‘chirish
    li.classList.toggle('completed');

  });

  // inputni tozalash
  input.value = '';
});