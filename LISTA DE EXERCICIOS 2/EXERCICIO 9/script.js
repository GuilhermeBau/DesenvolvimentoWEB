document.querySelector("#botaoDividir").onclick = function() {
    let numAlunos = Number(document.querySelector("#numAlunos").value);
    let numTurmas = Number(document.querySelector("#numTurmas").value);
    let resultado = "";

    if (numTurmas > 0) {
        let alunosPorTurma = Math.floor(numAlunos / numTurmas);
        let semTurma = numAlunos % numTurmas;

        resultado = `
            <p>Quantidade de pessoas por turma: ${alunosPorTurma}</p>
            <p>Quantidade de pessoas sem turma: ${semTurma}</p>
        `;
    } else {
        resultado = "<p>O número de turmas deve ser maior que zero.</p>";
    }

    document.querySelector("#resultado").innerHTML = resultado;
}