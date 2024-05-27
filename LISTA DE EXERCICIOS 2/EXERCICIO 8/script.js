document.querySelector("#botaoVerificar").onclick = function() {
    let numero = Number(document.querySelector("#numero").value);
    let resultado = "";

    if (numero % 2 === 0) {
        resultado = "O número é Par.";
    } else {
        resultado = "O número é Ímpar.";
    }

    document.querySelector("#resultado").innerHTML = resultado;
}