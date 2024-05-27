document.querySelector("#botaoVerificar").onclick = function() {
    let notaFinal = Number(document.querySelector("#notaFinal").value);
    let resultado = "";

    if (notaFinal > 6) {
        resultado = "Aprovado";
    } else if (notaFinal > 4) {
        resultado = "Precisa fazer prova substitutiva";
    } else {
        resultado = "Reprovado";
    }

    document.querySelector("#resultado").innerHTML = resultado;
}