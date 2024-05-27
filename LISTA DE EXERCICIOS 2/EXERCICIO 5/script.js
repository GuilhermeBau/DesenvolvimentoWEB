document.querySelector("#botaoCalcular").onclick = function() {
    let nome1 = document.querySelector("#nome1").value;
    let ano1 = Number(document.querySelector("#ano1").value);
    let nome2 = document.querySelector("#nome2").value;
    let ano2 = Number(document.querySelector("#ano2").value);
    let nome3 = document.querySelector("#nome3").value;
    let ano3 = Number(document.querySelector("#ano3").value);

    let anoAtual = new Date().getFullYear();

    let pessoas = [
        { nome: nome1, idade: anoAtual - ano1 },
        { nome: nome2, idade: anoAtual - ano2 },
        { nome: nome3, idade: anoAtual - ano3 }
    ];

    pessoas.sort((a, b) => b.idade - a.idade);

    let resultado = `
        <p>Pessoa mais velha: ${pessoas[0].nome} - ${pessoas[0].idade} anos</p>
        <p>Segunda pessoa mais velha: ${pessoas[1].nome} - ${pessoas[1].idade} anos</p>
        <p>Terceira pessoa mais velha: ${pessoas[2].nome} - ${pessoas[2].idade} anos</p>
    `;

    document.querySelector("#resultado").innerHTML = resultado;
}