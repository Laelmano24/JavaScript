import { NumeroAleatorio } from "/script.js"

const Container_main = document.querySelector(".container-interface")
const Container_min = document.querySelector(".container-valor-min")
const Container_max = document.querySelector(".container-valor-max")
const Container_acerto = document.querySelector(".container-acertar-valor")
const TextRes = document.getElementById("valor-text")
const Button_min = document.getElementById("button-min")
const Button_max = document.getElementById("button-max")
const Button_acertar = document.getElementById("button-acertar")
const Input_min = document.getElementById("ValueMin")
const Input_max = document.getElementById("ValueMax")
const Input_valor = document.getElementById("AcertarValue")
let NumAleatorio 

Button_min.addEventListener("click", () => {
  if (Input_min.value.length === 0) {
    alert("Digite algo primeiro")
  } else if (Input_min.value.length > 5) {
    alert("O número precisa ser menor que 5 dígito")
  } else {
  Container_main.style.animationName = "AnimationSaido"
  Container_main.style.animationDuration = "2s"
  Container_main.style.animationFillMode = "forwards"

  setTimeout(() => {
    Container_min.style.display = "none"
    Container_main.style.animationName = "AnimationEntrando"
    Container_main.style.animationDuration = "2s"
    Container_main.style.animationFillMode = "forwards"
    Container_max.style.display = "flex"
  }, 1000)
  }
})

Button_max.addEventListener("click", () => {
  
  if (Input_max.value.length === 0) {
    alert("Digite algo primeiro")
  } else if (Input_max.value.length > 5) {
    alert("O número precisa ser menor que 5 dígito")
  } else {
  Container_main.style.animationName = "AnimationSaido"
  Container_main.style.animationDuration = "2s"
  Container_main.style.animationFillMode = "forwards"

  setTimeout(() => {
    Container_max.style.display = "none"
    Container_main.style.animationName = "AnimationEntrando"
    Container_main.style.animationDuration = "2s"
    Container_main.style.animationFillMode = "forwards"
    Container_acerto.style.display = "flex"
    
    NumAleatorio = NumeroAleatorio(Input_max.value, Input_min.value)
    
    
  }, 1000)
  }
})

Button_acertar.addEventListener("click", () => {
  if (Input_valor.value.length === 0) {
    alert("Digite algo primeiro")
  } else {
    let inpt_value = Number(Input_valor.value)
    if (inpt_value === NumAleatorio) {
      TextRes.textContent = `Você acertou, o número era ${NumAleatorio}`
    } else if (inpt_value > NumAleatorio) {
      TextRes.textContent = `O número é menormenor que ${inpt_value}`
    } else if (inpt_value < NumAleatorio) {
      TextRes.textContent = `O número é maior que ${inpt_value}`
    }
    
  }
})
