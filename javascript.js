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

//function for theme change
let bgColor = document.querySelectorAll(".top, nav, .innerButtonThemeChange, circle, path")
let addColor = document.querySelector(".addCircle")
const themeChangeButton = document.querySelector(".themeChange")

function themeChange(element) {
    element.style.backgroundColor ="cyan"
    element.style.stroke ="cyan"

}

themeChangeButton.addEventListener("click", () => {
    addColor.style.fill = "cyan"
    bgColor.forEach(element => {
        themeChange(element);
    })
})


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