let ipValorQuilo = document.querySelector("#ipValorQuilo")
let ipQuantidadeQuilos = document.querySelector("#ipQuantidadeQuilos")
let btCalcular = document.querySelector("#btCalcular")
let h3Resultado = document.querySelector("#h3Resultado")

function calcularPeso(){
    let valorQuilo = Number(ipValorQuilo.value)
    let quantidadeQuilos = Number(ipQuantidadeQuilos.value)

    let valorPago = valorQuilo * quantidadeQuilos

    h3Resultado.innerHTML = 
    valorPago
} 
btCalcular.onclick = function(){
    calcularPeso()
}    