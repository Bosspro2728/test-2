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
    else if ( width > 700) {
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
function visibilityFunction(idp, ida) {//This function  will be used for toggeling the topics in the footer
    const x = document.getElementById(idp)
    const bracket = document.getElementById(ida)
    if (x.style.display === "none") {
        x.style.display = "flex";
        bracket.className = "";
        bracket.classList.add("fa-solid")
        bracket.classList.add("fa-angle-up")
    } else {
        x.style.display = "none";
        bracket.className = "";
        bracket.classList.add("fas")
        bracket.classList.add("fa-angle-down")
    }
}

function searchVisibility(ids, idt) {
    const input = document.getElementById(ids);
    const title = document.getElementById(idt)
    if (input.style.display === "none") {
        input.style.display = "flex";
        title.style.display = "none";
    } else {
        input.style.display = "none";
        title.style.display = "flex";
    }
}

