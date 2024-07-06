let slider = document.querySelector(".slider")
let cercle = document.querySelector(".cercle")
let body = document.querySelector(".body")

slider.addEventListener("click",()=>{
    cercle.classList.toggle("cercleNewCss")
    body.classList.toggle("bodyCss")
})