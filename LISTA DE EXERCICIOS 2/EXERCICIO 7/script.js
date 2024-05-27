document.querySelector("#botaoComparar").onclick = function() {
    let numero1 = Number(document.querySelector("#numero1").value);
    let numero2 = Number(document.querySelector("#numero2").value);
    let resultado = "";

    if (numero1 > numero2) {
        resultado = "O primeiro número é maior que o segundo.";
    } else if (numero1 < numero2) {
        resultado = "O primeiro número é menor que o segundo.";
    } else {
        resultado = "Os dois números são iguais.";
    }

    document.querySelector("#resultado").innerHTML = resultado;
}