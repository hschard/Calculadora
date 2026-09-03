let v1 = 0
let v2 = 0
let output = document.querySelector(".inputOut");
const btnEqual = document.querySelector(".result");
const buttons = document.querySelectorAll(".insert");

//SOMA
function sum(value1 = v1, value2 = v2) {
    console.log(value1 + value2)
}

//SUBTRAÇÃO
function sub(value1 = v1, value2 = v2) {
    console.log(value1 - value2)
}

//MULTIPLICAÇÃO
function multi(value1 = v1, value2 = v2) {
    console.log(value1 * value2)
}

//DIVISÃO
function div(value1 = v1, value2 = v2) {
    console.log(value1 / value2)
}

function inputIn() {
    buttons.forEach(function (index, item){
        console.log("item: " + item + " valor: " + index.textContent);
    });
    
}

function equalButton() {
    output.value = 0;
}


btnEqual.addEventListener("click", equalButton);

//For OF para passar por todos os botões
for (const allButtons of buttons) {
    allButtons.addEventListener("click", inputIn);
}


