// adding tasks
let addTasks = document.querySelector(".add")

    //pop-up Element
    let date = document.querySelectorAll(".top")
    let time = document.querySelectorAll(".time")
    let tasks = document.querySelectorAll(".tasks")

    function popUpInput(){
        const darkenForPopUp = document.querySelectorAll("nav, main, footer")
        const popUpQuestions = ["Datum:", "Uhrzeit:", "Aufgaben:"]
        let popUp = document.createElement("div")
        document.body.appendChild(popUp)

        darkenForPopUp.forEach(element => element.style.opacity = "1%")

        popUp.innerHTML = `<form action="/submit" method="POST" style="display:flex; flex-direction:column; justify-content:space-around; align-items:center;">
                           <label for="dateInput">${popUpQuestions[0]}</label>
                           <input type="text" id="dateInput" name="dateInput" placeholder="z.b.01.01.1999" style="width:80%; color:black;">
                           <button type="submit" style="background-color:var(--bg-color); border:1px solid var(--box-color); border-radius:5px; box-shadow:0 0 10px 1px var(--box-color); color:var(--font-color);">Senden</button>
                           </form> ` 
        popUp.style.cssText = "width:20%; height:20%; background-color:var(--bg-color); border:1px solid var(--box-color); border-radius:10px; box-shadow:0 0 10px 1px var(--box-color); color:var(--font-color); display:flex; justify-content:center; align-items:space-around; position:fixed; right:40%; top:40%; z-index:10;"
    }

    function addingTasks(){
        popUpInput()
    }

addTasks.addEventListener("click", () => addingTasks())



//function for theme change
let bgColor = document.querySelectorAll(".top, nav, .innerButtonThemeChange, circle, path")
let addColor = document.querySelector(".addCircle")

const themeChangeButton = document.querySelector(".themeChange")

function themeChange(element, color) {
    element.style.backgroundColor = color
    element.style.stroke = color

}

themeChangeButton.addEventListener("click", () => {
    if(addColor.style.fill != "cyan"){
        addColor.style.fill = "cyan"
        isCyan = true
        bgColor.forEach(element => {
            themeChange(element, "cyan");
        })
    }

    else {
        addColor.style.fill = ""
        bgColor.forEach(element => {
            themeChange(element, "");
        })
    }
})


//function task cleared
let clear = document.querySelectorAll(".clear");

clear.forEach((button) => {
    button.addEventListener("click", (event) => {
        let firstParent = event.target.closest(".bottom");
        let secondParent = firstParent?.parentElement;

        if (secondParent) {
            let topElements = secondParent.querySelectorAll('.top span');
            topElements.forEach((element) => {
                element.childNodes.forEach((child) => {
                    if (child.nodeType === Node.TEXT_NODE) {
                        child.textContent = "";
                    }
                });
            });

            let bottomElements = secondParent.querySelectorAll('.bottom .tasks');
            bottomElements.forEach((element) => {
                element.childNodes.forEach((child) => {
                    if (child.nodeType === Node.TEXT_NODE) {
                        child.textContent = ""; 
                    }
                });
            });
        }
    });
});








//bugs to fix later
    //when cyan checkmark doesnt turn white when hovering
    //when popup visible background still interactive