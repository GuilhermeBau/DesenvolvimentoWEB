function calcularValorArrecadado() {
    // Obter as quantidades de camisetas pequenas, médias e grandes
    var quantidadePequenas = parseInt(document.getElementById('quantidadePequenas').value);
    var quantidadeMedias = parseInt(document.getElementById('quantidadeMedias').value);
    var quantidadeGrandes = parseInt(document.getElementById('quantidadeGrandes').value);
    
    // Calcular o valor total arrecadado
    var valorPequenas = quantidadePequenas * 10;
    var valorMedias = quantidadeMedias * 12;
    var valorGrandes = quantidadeGrandes * 15;
    var valorTotal = valorPequenas + valorMedias + valorGrandes;
    
    // Exibir o resultado
    document.getElementById('resultado').innerText = 'Valor arrecadado: R$ ' + valorTotal.toFixed(2);
}
