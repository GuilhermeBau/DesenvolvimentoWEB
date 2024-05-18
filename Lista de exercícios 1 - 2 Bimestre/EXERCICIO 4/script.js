let ipValor1 = document.querySelector("#ipValor1");
let ipValor2 = document.querySelector("#ipValor2");
let ipValor3 = document.querySelector("#ipValor3");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcular (){
    let vlr1 = Number (ipValor1.value);
    let vlr2 = Number (ipValor2.value);
    let vlr3 = Number (ipValor3.value);

    
    let mediaAritmetica = (vlr1 + vlr2 + vlr3) / 3; 

    let somaValoresPesos = (vlr1 * 3) + (vlr2 * 2) + (vlr3 * 5);
    let somaPesos = 3 + 2 + 5;
    let mediaPonderada = somaValoresPesos / somaPesos;

    let somaMedias = mediaAritmetica + mediaPonderada;

    let mediaMedias = somaMedias / 2;

    h3Resultado.innerHTML = 
    "Media Aritmetica: "+mediaAritmetica+"<br>"+
     "MediaPonderada: "+mediaPonderada+"<br>"+
     "Soma das Medias: "+somaMedias+"<br>"+
     "Media das Medias "+mediaMedias+"<br>"
}

btCalcular.onclick = function (){
    calcular()
}