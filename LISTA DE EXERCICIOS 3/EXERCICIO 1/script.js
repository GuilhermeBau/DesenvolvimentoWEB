function calcularArea() {
    // Obter os valores de largura e comprimento
    var largura = document.getElementById('largura').value;
    var comprimento = document.getElementById('comprimento').value;
    
    // Verificar se os valores são válidos
    if (largura <= 0 || comprimento <= 0) {
        alert('Por favor, insira valores válidos para largura e comprimento.');
        return;
    }
    
    // Calcular a área do terreno
    var area = largura * comprimento;
    
    // Exibir o resultado
    document.getElementById('resultado').innerText = 'A área do terreno é: ' + area + ' metros quadrados';
}