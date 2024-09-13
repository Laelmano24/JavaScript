import { VerificarHoras } from '/Check burlamaker/time.js';

const Interface_Init = document.querySelector(".Interface-init")
const Interface_main = document.querySelector(".container-main")
const Button = document.querySelector(".Interface-init > button")
const Main_Text = document.querySelector(".container-main > h2")
const Imagem = document.querySelector(".container-main > img")

Button.addEventListener("click", ()=> {
  
  Button.style.boxShadow = "none"
  Button.style.background = "#11E4DE"
  setTimeout(() => {
    Button.style.background = "#09AAA5"
  }, 150)
  
  setTimeout(()=> {
    Interface_Init.style.display = "none"
    Interface_main.style.display = "flex"
  }, 1000)
})

Main_Text.textContent = VerificarHoras()

if (VerificarHoras() === "Burlamaker possivelmente spwanou") {
  setTimeout(() => {
    Imagem.style.display = "block"
    Imagem.style.animationName = "FadeIn"
    Imagem.style.animationDuration = "1s"
    Imagem.style.animationFillMode = "forwards"
  }, 4000)
}
