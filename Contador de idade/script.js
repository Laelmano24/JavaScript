var anoagora = new Date().getFullYear();
var inputanoElement = document.getElementById("anodata");
var sexo_m = document.getElementById("sexo-m");
var sexo_f = document.getElementById("sexo-f");
var img = document.getElementById("foto");
var genero = '';
var res = document.querySelector(".resultado > p");

function clicar() {
  var inputano = Number(inputanoElement.value);
  var idade = anoagora - inputano;

  if (isNaN(inputano) || inputano === 0 || inputano > anoagora) {
    window.alert("[ERRO] Digitação de dados inválida.");
  } else {
    if (sexo_m.checked) {
      if (idade < 10) {
        genero = "homem";
        img.setAttribute("src", "bebe-masculino.png");
      } else if (idade < 18) {
        genero = "homem";
        img.setAttribute("src", "jovem-masculino.png");
      } else if (idade < 60) {
        genero = "homem";
        img.setAttribute("src", "adulto-masculino.png");
      } else {
        genero = "homem";
        img.setAttribute("src", "idoso-masculino.png");
      }
    } else if (sexo_f.checked) {
      if (idade < 10) {
        genero = "mulher";
        img.setAttribute("src", "bebe-feminina.png");
      } else if (idade < 18) {
        genero = "mulher";
        img.setAttribute("src", "jovem-feminina.png");
      } else if (idade < 60) {
        genero = "mulher";
        img.setAttribute("src", "adulto-feminina.png");
      } else {
        genero = "mulher";
        img.setAttribute("src", "idoso-feminina.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos que você tem ${idade} anos e é ${genero}`;
  }
}
