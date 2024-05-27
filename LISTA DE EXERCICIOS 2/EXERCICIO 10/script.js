document.querySelector("#botaoCalcular").onclick = function() {
    let valorVendido = Number(document.querySelector("#valorVendido").value);
    let meta = Number(document.querySelector("#meta").value);
    let metaMinima = Number(document.querySelector("#metaMinima").value);
    let resultado = "";

    if (valorVendido >= meta) {
        resultado = "Atingiu a meta.";
    } else if (valorVendido >= metaMinima) {
        resultado = "Atingiu a meta mínima.";
    } else {
        resultado = "Não atingiu nenhuma das metas.";
    }

    let percentualMeta = ((valorVendido / meta) * 100).toFixed(2);
    let percentualMetaMinima = ((valorVendido / metaMinima) * 100).toFixed(2);

    resultado += `<p>Percentual de atingimento da meta: ${percentualMeta}%</p>`;
    resultado += `<p>Percentual de atingimento da meta mínima: ${percentualMetaMinima}%</p>`;

    document.querySelector("#resultado").innerHTML = resultado;
}