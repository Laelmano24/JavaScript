var agora = new Date();

var diasem = agora.getDay();

var h2 = window.document.querySelector("article h2")

var btn1 = window.document.getElementById("btn1")

btn1.addEventListener("mousemove", btn1hoverent)
btn1.addEventListener("mouseout", btn1hoverout)

btn1.addEventListener("click", clicar)

function clicar() {
  if (diasem === 1) {
    var Segunda = window.document.getElementById("Segunda");
    Segunda.style.display = "block"

  } else if (diasem === 2) {
    var Terca = window.document.getElementById("Terca")
    Terca.style.display = "block"

  } else if (diasem === 3) {
    var Quarta = window.document.getElementById("Quarta")
    Quarta.style.display = "block"

  } else if (diasem === 4) {
    var Quinta = window.document.getElementById("Quinta")
    Quinta.style.display = "block"
    
  } else if (diasem === 5) {
    var Quinta = window.document.getElementById("Quinta")
    Sexta.style.display = "block"
  }
}

function btn1hoverent() {
  btn1.style.backgroundColor = "#119167"
}

function btn1hoverout() {
  btn1.style.backgroundColor = "#1BDE9C"
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
