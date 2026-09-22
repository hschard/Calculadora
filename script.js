let v1 = 0;
let v2 = 0;
let output = document.querySelector(".inputOut");
const btnEqual = document.querySelector(".result");
//Valores dos numeros captando pelo ID
const btnKeys = [
    document.getElementById("1").value = 1,
    document.getElementById("2").value = 2,
    document.getElementById("3").value = 3,
    document.getElementById("4").value = 4,
    document.getElementById("5").value = 5,
    document.getElementById("6").value = 6,
    document.getElementById("7").value = 7,
    document.getElementById("8").value = 8,
    document.getElementById("9").value = 9
];

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
    console.log(btnKeys);
}

function equalButton() {
  output.value = 0;
}

//Gerar o resultado
btnEqual.addEventListener("click", equalButton);

