function clicar() {
  var inicio = document.getElementById("txti")
  var fim = document.getElementById("txtf")
  var passo = document.getElementById("txtp")
  var res = document.getElementById("resultado")
  
  var i = Number(inicio.value)
  var f = Number(fim.value)
  var p = Number(passo.value)
  
  res.innerHTML = ""

  if (i >= f) {
    window.alert("O incio não pode ser maior que o fim")
    
  } else {
    for (var c = i; c < f; c++) {
      
      res.innerHTML += (`Contado ${i} <br>`)
    }
    
  }
}
