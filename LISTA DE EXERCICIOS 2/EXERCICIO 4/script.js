let primeiroSabor = document.querySelector("#sabor1");
let segundoSabor = document.querySelector("#sabor2");
let terceiroSabor = document.querySelector("#sabor3");
let quartoSabor = document.querySelector("#sabor4");
let refri = document.querySelector("#refrigerantes");
let btCalcular = document.querySelector("#botaoCalcular");
let divResumo = document.querySelector("#resumoPedido");

function calcularValor() {
    let precoPizza = 12.00;
    let precoRefrigerante = 7.00;

    let refrigerantes = Number(refri.value);

    let totalSabores = 4 * precoPizza; // Cada sabor custa R$ 12,00
    let totalRefrigerantes = refrigerantes * precoRefrigerante; // Cada refrigerante custa R$ 7,00
    let total = totalSabores + totalRefrigerantes;

    let resumoPedido = `
        <p>Sabores escolhidos:</p>
        <ul>
            <li>${primeiroSabor.value}</li>
            <li>${segundoSabor.value}</li>
            <li>${terceiroSabor.value}</li>
            <li>${quartoSabor.value}</li>
        </ul>
        <p>Quantidade de Refrigerantes: ${refrigerantes}</p>
        <p><strong>Valor total a pagar: R$ ${total.toFixed(2)}</strong></p>
    `;

    divResumo.innerHTML = resumoPedido;
}

btCalcular.onclick = function() {
    calcularValor();
}