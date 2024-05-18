let ipValor = document.querySelector("#ipValor")
let btCalcular = document.querySelector("#btCalcular")
let h3Resultado = document.querySelector("#h3Resultado")

function verificarImpar(){
    let valor = Number (ipValor.value)
    let resto = valor % 2
    if(resto==0){
        h3Resultado.innerHTML = "O Numero nao e impar"
    } else{
        h3Resultado.innerHTML = "O Numero e impar"
    }
}
btCalcular.onclick = function(){
    verificarImpar()
}