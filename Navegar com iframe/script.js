let input = document.getElementById("txt1")
let btn = document.getElementById("button")
let iframe = document.getElementById("iframe-container")

btn.addEventListener("click", clicar)

function clicar() {
    let inputValue = input.value
    iframe.setAttribute("src", inputValue)
}
function entrar() {
    iframe.style.boxShadow = ("0px 0px 10px white")
    iframe.style.transform = ("translate(0px, 10px)")
    iframe.style.transition = ("transform 1s")
}
function sair() {
    iframe.style.transform = ("translate(0px, 0px)")
    iframe.style.transition = ("transform 1s")
    iframe.style.boxShadow = ("0px 0px 10px #865611")
}