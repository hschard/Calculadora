//Input do resultado
let output = document.querySelector(".inputOut");
//Botao igual
const btnEqual = document.querySelector(".result");
//Valores dos numeros
const btnKeys = document.querySelectorAll(".insert");

//SOMA
function sum(value1, value2) {
  console.log(value1 + value2);
}

//SUBTRAÇÃO
function sub(value1, value2) {
  console.log(value1 - value2);
}

//MULTIPLICAÇÃO
function multi(value1, value2) {
  console.log(value1 * value2);
}

//DIVISÃO
function div(value1, value2) {
  console.log(value1 / value2);
}

//Ajustar para cada botão ser reconhecido individualmente
function insertKey() {
    console.log(btnKeys[0].textContent);
}

function equalButton() {
  output.value = 0;
}

//Gerar o resultado
btnEqual.addEventListener("click", equalButton);

