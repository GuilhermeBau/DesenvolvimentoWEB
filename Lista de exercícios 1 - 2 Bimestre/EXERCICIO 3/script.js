let ipSaldo = document.querySelector("#ipSaldo")
let btCalcular = document.querySelector("#btCalcular")
let h3Resultado = document.querySelector("#h3Resultado")

function calcularSaldo(){
    let saldo = Number (ipSaldo.value)
    let reajuste = saldo * 0.01
    let saldoRecalculado = saldo + reajuste
    h3Resultado.innerHTML = saldoRecalculado
}

btCalcular.onclick = function(){
    calcularSaldo()
}