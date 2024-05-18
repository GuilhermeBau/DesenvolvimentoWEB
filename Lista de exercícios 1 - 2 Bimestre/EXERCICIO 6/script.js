let valor1 = document.querySelector("#ipvalor1")
let valor2 = document.querySelector("#ipvalor2")
let valor3 = document.querySelector("#ipvalor3")
let valor4 = document.querySelector("#ipvalor4")
let btCalcular = document.querySelector("#btCalcular")
let h3Resultado = document.querySelector("#h3Resultado")

function encontrarMenor(){
    vlr1 = Number(valor1.value)
    vlr2 = Number(valor2.value)
    vlr3 = Number(valor3.value)
    vlr4 = Number(valor4.value)

    menorValor = vlr1;
    if (vlr2 < menorValor) {
        menorValor = vlr2;
    }
    if (vlr3 < menorValor) {
        menorValor = vlr3;
    }
    if (vlr4 < menorValor) {
        menorValor = vlr4;
    }
    h3Resultado.innerHTML = "O menor valor e: " + menorValor
}
btCalcular.onclick = function(){
    encontrarMenor()
}