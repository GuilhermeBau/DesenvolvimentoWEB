let ipCotacaoDolar = document.querySelector ("#cotacaoDolar")
let botaoCalcular = document.querySelector ("#botaoCalcular")
let divAumentoUm = document.querySelector ("#aumentoUmPorcento")
let divAumentoDois = document.querySelector ("#aumentoDoisPorcento")
let divAumentoCinco = document.querySelector ("#aumentoCincoPorcento")
let divAumentoDez = document.querySelector ("#aumentoDezPorcento")

function calcularPorcentagem(){
    let cotacaoDolar = Number (ipCotacaoDolar.value)
    let aumentoUm = cotacaoDolar * 0.01
    let totalUm = aumentoUm + cotacaoDolar

    let aumentoDois = cotacaoDolar * 0.02
    let totalDois = aumentoDois + cotacaoDolar

    let aumentoCinco = cotacaoDolar * 0.05
    let totalCinco = aumentoCinco + cotacaoDolar

    let aumentoDez = cotacaoDolar * 0.10
    let totalDez = aumentoDez + cotacaoDolar

    divAumentoUm.innerHTML = "Cotacao do Dolar com Acrescimo de 1%: " + totalUm + "."
    divAumentoDois.innerHTML = "Cotacao do Dolar com Acrescimo de 2%: " + totalDois + "."
    divAumentoCinco.innerHTML = "Cotacao do Dolar com Acrescimo de 5%: " + totalCinco + "."
    divAumentoDez.innerHTML = "Cotacao do Dolar com Acrescimo de 10%: " + totalDez + "."



}

botaoCalcular.onclick = function(){
    calcularPorcentagem()
}






