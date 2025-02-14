// adding tasks
let addTasks = document.querySelector(".add")

function addingTasks(){
const task = prompt("Welche Aufgabe?");
const date = prompt("Datum");
const time = prompt("Uhrzeit");

if (!task || !date || !time)
    {return}

}

addTasks.addEventListener("click", () => addingTasks())

//function task cleared
let clear = document.querySelectorAll(".clear")

let taskHeader = document.querySelectorAll(".top")
let taskBottom = document.querySelectorAll(".tasks")

function clearTask() {
    taskHeader.forEach((header) =>
    header.textContent = ""
    )
    taskBottom.forEach((bottom) =>
    bottom.textContent = ""
    )
}

clear.forEach((button) => button.addEventListener("click", () => clearTask()))