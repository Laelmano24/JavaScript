let input = document.getElementById("txt1")
let btn_1 = document.getElementById("button-1")
let btn_2 = document.getElementById("button-2")
let irame_container = document.querySelector("iframe-container")
let iframe = document.getElementById("iframe-container")

btn_1.addEventListener("click", clicar_1)
btn_2.addEventListener("click", clicar_2)

function clicar_1 () {
    let inputValue = input.value
    iframe.setAttribute("src", inputValue)
    btn_2.style.display = ("block")
}
function clicar_2 () {
    let body = document.querySelector(".body")
    let main = document.getElementsByTagName("main")[0]
    let iframe2 = document.getElementById("iframe-2")
    
    let inputValue = input.value
    iframe2.setAttribute("src", inputValue)

    main.style.display = ("none")
    iframe2.style.display = ("block")
    iframe2.style.margin = ("0px auto")
    iframe2 .style.height = ("100%")
    iframe2.style.width = ("100%")
    iframe.style.display = ("none")
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
