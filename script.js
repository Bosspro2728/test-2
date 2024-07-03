screenChange = (event) => {
    var width = window.innerWidth
    const mobileLayout = document.getElementsByClassName("mobile")
    const desktopLayout = document.getElementsByClassName("desktop")
    if (width <= 700) {
        for (let i = 0; i < mobileLayout.length; i++) {
            const element = mobileLayout[i];
            element.classList.remove("hide");
        }
        for (let j = 0; j < desktopLayout.length; j++) {
            const element = desktopLayout[j];
            element.classList.add("hide");
        }            
    } 
    else if (width > 700 ) {
        for (let i = 0; i < mobileLayout.length; i++) {
            const element = mobileLayout[i];
            element.classList.add("hide");
        }
        for (let j = 0; j < desktopLayout.length; j++) {
            const element = desktopLayout[j];
            element.classList.remove("hide");
        } 
    }
}
screenChange()
window.addEventListener("resize", screenChange)

function visibilityFunction(classp, classb) {
    const x = document.getElementsByClassName(classp);
    const button = document.getElementById(classb)
    const brcket = document.createElement("i")
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        if (element.style.display === "none") {
            element.style.display = "flex";
            brcket.classList.add("fa-solid")
            brcket.classList.add("fa-angle-up")
            button.textContent = '';
            button.append(brcket);
        } else {
            element.style.display = "none";
            brcket.classList.add("fas")
            brcket.classList.add("fa-angle-down")
            button.textContent = '';
            button.append(brcket);
        }
    }
}
// This script is used for making a smooth transion from desktop to mobile
// and vice versa. we call the function twice because if we only used it 
// in the event listener when somebody would refresh the page it would show 
// mobile and desktop elements at the same time. running it twice slows down
// the site but it fixes the bug and the time it takes to run is not too long
//Explained better in the README file.