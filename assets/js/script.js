





const addEventOnElement = function (elements,evenType,callBack){
    for(let i=0 ; i<elements.length ; i++){
        console.log(elements[i])
        elements[i].addEventListener(evenType,callBack);
    }
}

let navBar = document.querySelector("[data-navbar]");
let navTogglers = document.querySelectorAll("[data-nav-toggler]");
let overlay = document.querySelector("[data-overlay]");
console.log(navTogglers.length)
let toggleActive = function (){
    navBar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElement(navTogglers,"click",toggleActive)

let header = document.querySelector(".header");

window.onscroll = ()=>{
    if(window.scrollY > 100){
        header.classList.add("active");
    }else{
        header.classList.remove("active");
    }
}


// animation 
let revealElements = Array.from(document.querySelectorAll("[data-reveal]"));
let revealDeleayElements = document.querySelectorAll("[data-revealdelay]")
let progresseSection = document.querySelector(".progresse");
let progresseSpans = document.querySelectorAll("[data-prog]")
console.log(progresseSpans)
console.log(revealDeleayElements)
const reveal = () => {
    for(let i=0 ; i< revealElements.length ; i++){
        
        if(revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2){
            revealElements[i].classList.add("revealed")
        }else{
            revealElements[i].classList.remove("revealed")
        }
    }
    for(let i=0 ; i< revealDeleayElements.length ; i++){
        if(revealDeleayElements[i].getBoundingClientRect().top < window.innerHeight ){
            console.log(revealDeleayElements[i])
            revealDeleayElements[i].style.transitionDelay = revealDeleayElements[i].dataset.revealdelay
        }
    }
}
window.addEventListener("load",reveal);
window.addEventListener("scroll",reveal);
window.addEventListener("scroll",()=>{
    if(window.scrollY > progresseSection.offsetTop - 300){
        progresseSpans.forEach((e)=>{
            e.style.width = e.dataset.prog
        })
    }
})