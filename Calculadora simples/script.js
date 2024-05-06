//Variaveis de entrada
let input1 = document.getElementById("txt1")
let input2 = document.getElementById("txt2")

//Variaveis do botão
let btnsomar = document.getElementById("btnsoma")
let btnsubtrair = document.getElementById("bntsubtrai")
let btnmultiplicar = document.getElementById("btnmultiplica")
let btndividir = document.getElementById("dividi")

//criando od comando para funciona meu EventoDom
btnsomar.addEventListener("click", somar)
btnsubtrair.addEventListener("click", subtrair)
btnmultiplicar.addEventListener("click", multiplicar)
btndividir.addEventListener("click", dividir)

//Variavel de resultado
let res = document.getElementById("resultado")

//Função de soma
function somar() {
  
  //Criando variáveis que converte o input para inteiro
  let inpt1 = Number(input1.value)
  let inpt2 = Number(input2.value)
  
  //Processando o calculo
  let valor = inpt1 + inpt2
  res.innerHTML = (`O resultado foi: ${valor}`)
  
}

//Função de subtrair
function subtrair() {
  
  //Criando variáveis que converte o input para inteiro
  let inpt1 = Number(input1.value)
  let inpt2 = Number(input2.value)
  
  //Processando o calculo
  let valor = inpt1 - inpt2
  res.innerHTML = (`O resultado foi: ${valor}`)
}

//Função de multiplicação
function multiplicar() {
  
  //Criando variáveis que converte o input para inteiro
  let inpt1 = Number(input1.value)
  let inpt2 = Number(input2.value)
  
  //Processando o calculo
  let valor = inpt1 * inpt2
  res.innerHTML = (`O resultado foi: ${valor}`)
}

//Função de divisão
function dividir() {
  
  //Criando variáveis que converte o input para inteiro
  let inpt1 = Number(input1.value)
  let inpt2 = Number(input2.value)
  
  //Processando o calculo
  let valor = inpt1 / inpt2
  
  //Vou uma condição porque para não se dividir por 0
  if (inpt2 === 0){
    window.alert("O numero não pode ser dividido por 0")
  } else {
    res.innerHTML = (`O resultado foi: ${valor}`)
  }
}
