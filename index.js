var altura = 0.00;
var peso = 0.00;

function capturarValores() {
  altura = parseFloat(document.getElementById('altura').value);
  peso = parseFloat(document.getElementById('peso').value);
}

function calcularImc() {
  return peso / altura ** 2;
}

function imprimirResultado(resultado) {
  document.getElementById('imc').innerHTML = resultado;
}

function calcularEImprimirIMC() {
  capturarValores();
  resultado = calcularImc();
  imprimirResultado(resultado);
}