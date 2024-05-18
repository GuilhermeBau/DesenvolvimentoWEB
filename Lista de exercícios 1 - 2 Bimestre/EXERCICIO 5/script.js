let valor1 = document.querySelector("#valor1")
let valor2 = document.querySelector("#valor2")
let btCalcular = document.querySelector("#btCalcular")
let h3Resultado = document.querySelector("#h3Resultado")

function retornarMaior(){
    let vlr1 = Number (valor1.value)
    let vlr2 = Number (valor2.value)
    if (vlr1>vlr2){
        h3Resultado.innerHTML = vlr1
    } else{
        h3Resultado.innerHTML = vlr2
    }
}
btCalcular.onclick = function(){
    retornarMaior()
}