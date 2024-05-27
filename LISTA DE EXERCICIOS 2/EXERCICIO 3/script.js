let ipAdicionarNumero = document.querySelector("#adicionarNumero");
let ipAdicionarNumero1 = document.querySelector("#adicionarNumero1");
let btCalcular = document.querySelector("#botaoCalcular");
let divAdicao = document.querySelector("#adicao");
let divSubtracao = document.querySelector("#subtracao");
let divMultiplicacao = document.querySelector("#multiplicacao");
let divDivisao = document.querySelector("#divisao");

function calcularOperacoes() {
    let adicionaroNumero = Number(ipAdicionarNumero.value);
    let adicionaroNumero1 = Number(ipAdicionarNumero1.value);

    let adicao = adicionaroNumero + adicionaroNumero1;
    let subtracao = adicionaroNumero - adicionaroNumero1;
    let multiplicacao = adicionaroNumero * adicionaroNumero1;
    let divisao = adicionaroNumero / adicionaroNumero1;

    divAdicao.innerHTML = "O RESULTADO ADICIONADO  " + adicao;
    divSubtracao.innerHTML = "O RESULTADO SUBTRAIDO  " + subtracao;
    divMultiplicacao.innerHTML = "O RESULTADO MULTIPLICADO  " + multiplicacao;
    divDivisao.innerHTML = "O RESULTADO DIVIDIDO  " + divisao;
}

btCalcular.onclick = function() {
    calcularOperacoes();
}