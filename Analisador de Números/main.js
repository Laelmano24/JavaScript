let entrada = document.getElementById("txt1")

let btn_1 = document.getElementById("button-1")

let btn_2 = document.getElementById("button-2")

let saida = document.getElementById("saida")

let vetore = []

btn_1.addEventListener("click", verificar)

btn_2.addEventListener("click", finalizar)

function verificar() {
  let inpt = Number(entrada.value)
  if (entrada.value.length == 0) {
    window.alert("Por favor, insira um valor.")
  } else {
    if (inpt > 100 || inpt < 1) {
      window.alert("Apenas número de 1 á 100")
    } else {
      
      let option = document.createElement(`option`)
      
      saida.appendChild(option)
      
      option.innerHTML = (`adicionando: ${inpt}`)
      
      vetore.push(inpt)
      
    }
  }
}

function finalizar() {
  let txt1 = document.getElementById("resultado")
  
  vetore.sort()
  
  let maior_numero = vetore.length -1
  let menor_numero = 0
  
  txt1.innerHTML = (`Ao todo, temos ${vetore.length} números cadastrados <br>O maior número é: ${vetore[maior_numero]}<br>O menor número é: ${vetore[menor_numero]}`)
}
