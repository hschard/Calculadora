let v1 = 0;
let v2 = 0;
let output = document.querySelector(".inputOut");
const btnEqual = document.querySelector(".result");
//Valores dos numeros
const btnKeys = document.querySelectorAll(".insert");

//SOMA
function sum(value1 = v1, value2 = v2) {
  console.log(value1 + value2);
}

//SUBTRAÇÃO
function sub(value1 = v1, value2 = v2) {
  console.log(value1 - value2);
}

//MULTIPLICAÇÃO
function multi(value1 = v1, value2 = v2) {
  console.log(value1 * value2);
}

//DIVISÃO
function div(value1 = v1, value2 = v2) {
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

