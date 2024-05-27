console.log("Script feito por Israel")
const relogio_container = document.getElementsByClassName("relogio")[0]
const horas = document.getElementById("horas")
const minutos= document.getElementById("minutos")
const segundos = document.getElementById("segundos")
let num = 1000

relogio_container.addEventListener("mouseenter", enter)
relogio_container.addEventListener("mouseout", out)

function relogio () {
  let horasdodia = new Date()
  let hr = horasdodia.getHours()
  let min = horasdodia.getMinutes()
  let s = horasdodia.getSeconds()
  
  horas.textContent = hr
  minutos.textContent = min
  segundos.textContent = s
  
  if (hr < 10){
    horas.textContent = "0" + hr
  } else if (min < 10) {
    horas.textContent = "0" + min
  } else if (s < 10) {
    segundos.textContent = "0" + s
  }
}

setInterval(relogio, num)

function enter() {
  relogio_container.style.transform = ("scale(1.1)")
  relogio_container.style.transition = ("transform 0.5s")
}

function out() {
  relogio_container.style.transform = ("scale(1)")
  relogio_container.style.transition = ("transform 0.5s")
}
