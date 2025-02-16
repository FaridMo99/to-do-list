// adding tasks
let addTasksButton = document.querySelector("[data-open-modal]")
let popUp = document.querySelector("[data-modal]")
let closeButton = document.querySelector("[data-close-modal]")

    //open and close pop-up
addTasksButton.addEventListener("click", () => {
popUp.showModal()
})

closeButton.addEventListener("click", () => {
    popUp.close()
})

//function for theme change
let bgColor = document.querySelectorAll(".top, nav, .innerButtonThemeChange, .popUpInput, circle, path")
let addColor = document.querySelector(".addCircle")

const themeChangeButton = document.querySelector(".themeChange")

function themeChange(element, color) {
    element.style.backgroundColor = color
    element.style.stroke = color

}

themeChangeButton.addEventListener("click", () => {
    if(addColor.style.fill != "cyan"){
        addColor.style.fill = "cyan"

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
    //themechange button accessible during popup
    //input bordercolor dont change when cyan
//functions to add
    //a cancel popup with a button or clicking background
    //if clicking on a task, should center it,grow and make it editable and clicking background should ask save changes or not and clicking on clear should still be possible 
    //erledigt should be greyed out and only be accesible for removing(clear button should delete(x instead of cross) and should ask if youre sure)
    //bevorstehend and heute should always show the closest date and time from top to bottom
    //function in navbar that shows only erledigt, heute, bevorstehend
    //connect to date and time API to make order of tasks