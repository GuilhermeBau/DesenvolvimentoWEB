let ipValorPago = document.querySelector("#ipValorPago")
let ipPrecoProduto = document.querySelector ("#ipPrecoProduto")
let btCalcular = document.querySelector("#btCalcular")
let h3Resultado = document.querySelector("#h3Resultado")
    
function calcularTroco (){
    let valorPago = Number (ipValorPago.value)
    let precoProduto = Number (ipPrecoProduto.value)

    let valorTroco = valorPago - precoProduto

    h3Resultado.innerHTML = 
    valorTroco
} 
btCalcular.onclick = function(){
    calcularTroco()
}