// adding tasks
let addTasks = document.querySelector(".add")

function addingTasks(){
const task = prompt("Welche Aufgabe?");
const date = prompt("Datum");
const time = prompt("Uhrzeit");
}

addTasks.addEventListener("click", () => addingTasks())

//function task cleared
let clear = document.querySelectorAll(".clear")

let top = document.querySelectorAll(".top")
let bottom = document.querySelectorAll(".bottom")

function clearTask() {
    

}

clear.addEventListener("click", () => clearTask())