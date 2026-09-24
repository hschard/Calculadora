//Input do resultado
let output = document.querySelector(".inputOut");
//Botao igual
const btnEqual = document.querySelector(".result");
//Valores dos numeros
const btnKeys = document.querySelectorAll(".insert");
//Variaveis dos operadores
const keySum = document.getElementById("plus");
const keySub = document.getElementById("minus");
const keyMulti = document.getElementById("times");
const keyDiv = document.getElementById("split");


//Verifica se os dois valores foram preenchidos corretamente
function verifValor(v1, v2) {
  if (v1 != null || v2 != null) {
   
  }else {
    alert("Informe um valor!");
  }

}

//SOMA
function sum(value1, value2) {
  value1 = parseFloat(output.value) 
  //Verifica se o primeiro numero foi preenchido
  if (value1 != null) {
    output.value = null;
    output.value += keySum.textContent;  
  }
  value2 = parseFloat(output.value);

  //Aplica a verificao de valores
  //verifValor(value1, value2);
  console.log(value1);
  console.log(value2);
  
  //Realiza a soma
  //output.value = (value1 + value2);
}

//SUBTRAÇÃO
function sub(value1, value2) {
  output.value += keySub.textContent;
  console.log(value1 - value2);
}

//MULTIPLICAÇÃO
function multi(value1, value2) {
  output.value += keyMulti.textContent;
  console.log(value1 * value2);
}

//DIVISÃO
function div(value1, value2) {
  output.value += keyDiv.textContent;
  console.log(value1 / value2);
}

//Arrows functions para exibir os botoes no output
const key0 = () => output.value += btnKeys[10].textContent
const key1 = () => output.value += btnKeys[0].textContent;
const key2 = () => output.value += btnKeys[1].textContent;
const key3 = () => output.value += btnKeys[2].textContent;
const key4 = () => output.value += btnKeys[3].textContent;
const key5 = () => output.value += btnKeys[4].textContent;
const key6 = () => output.value += btnKeys[5].textContent;
const key7 = () => output.value += btnKeys[6].textContent;
const key8 = () => output.value += btnKeys[7].textContent;
const key9 = () => output.value += btnKeys[8].textContent;
const keyComma = () => output.value += btnKeys[9].textContent;
const clearOut = () => output.value = null;

function equalButton() {
  output.value = 0;
}

//Gerar o resultado
btnEqual.addEventListener("click", equalButton);

