// DARK MODE

function toggleMode(){
document.body.classList.toggle("dark");
}


// COUNTER

let count = 0;

function increase(){
count++;
document.getElementById("count").innerText = count;
}

function decrease(){
count--;
document.getElementById("count").innerText = count;
}

function reset(){
count = 0;
document.getElementById("count").innerText = count;
}


// TODO LIST

function addTask(){

let input = document.getElementById("taskInput");

let task = input.value;

if(task === "") return;

let li = document.createElement("li");

li.innerHTML = task + ' <button class="delete" onclick="this.parentElement.remove()">X</button>';

document.getElementById("taskList").appendChild(li);

input.value = "";

}


// RANDOM COLOR

function randomColor(){

let r = Math.floor(Math.random()*255);
let g = Math.floor(Math.random()*255);
let b = Math.floor(Math.random()*255);

document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

}