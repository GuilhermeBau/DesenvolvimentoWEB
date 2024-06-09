function converterTempo() {
    // Obter a quantidade de dias sem acidentes
    var diasSemAcidentes = parseInt(document.getElementById('diasSemAcidentes').value);
    
    // Calcular anos, meses e dias
    var anos = Math.floor(diasSemAcidentes / 365);
    var meses = Math.floor((diasSemAcidentes % 365) / 30);
    var dias = diasSemAcidentes % 30;
    
    // Exibir o resultado
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '<p>Tempo sem acidentes equivale a:</p>';
    resultado.innerHTML += '<p>' + anos + ' ano(s), ' + meses + ' mês(es) e ' + dias + ' dia(s)</p>';
}