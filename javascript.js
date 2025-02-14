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

let isCyan = false

const themeChangeButton = document.querySelector(".themeChange")

function themeChange(element, color) {
    element.style.backgroundColor = color
    element.style.stroke = color

}

themeChangeButton.addEventListener("click", () => {
    if(!isCyan){
        addColor.style.fill = "cyan"
        isCyan = true
        bgColor.forEach(element => {
            themeChange(element, "cyan");
        })
    }

    else {
        isCyan = false
        addColor.style.fill = ""
        bgColor.forEach(element => {
            themeChange(element, "");
        })
    }
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