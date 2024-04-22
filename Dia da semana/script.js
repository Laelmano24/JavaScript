var agora = new Date();
var diasem = agora.getDay()
var h2 = window.document.querySelector("article h2");
var btn2 = window.document.getElementById("btn2");

btn2.addEventListener("click", clicar);

function clicar() {
  if (diasem === 1) {
    var Sala11Segunda = window.document.getElementById("Sala11Segunda");
    Sala11Segunda.style.display = "block";
  } else if (diasem === 2) {
    var Sala11Terca = window.document.getElementById("Sala11Terca")
    Sala11Terca.style.display = "block"


  }
}

switch (diasem) {
  case 0:
    h2.innerHTML = "Hoje é domingo, cidadão.";
    break;
  case 1:
    h2.innerHTML = "Hoje é segunda-feira, cidadão.";
    break;
  case 2:
    h2.innerHTML = "Hoje é terça-feira, cidadão.";
    break;
  case 3:
    h2.innerHTML = "Hoje é quarta-feira, cidadão.";
    break;
  case 4:
    h2.innerHTML = "Hoje é quinta-feira, cidadão.";
    break;
  case 5:
    h2.innerHTML = "Hoje é sexta-feira, cidadão.";
    break;
  case 6:
    h2.innerHTML = "Hoje é sábado, cidadão.";
    break;
  default:
    window.alert("Erro");
    break;
}