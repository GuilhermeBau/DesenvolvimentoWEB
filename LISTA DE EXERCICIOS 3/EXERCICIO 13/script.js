function calcularArea() {
    // Obter o raio da pizza inserido pelo usuário
    var raio = parseFloat(document.getElementById('raio').value);
    
    // Calcular a área da pizza usando a fórmula A = pi * R^2
    var area = 3.14 * Math.pow(raio, 2);
    
    // Exibir o resultado
    document.getElementById('resultado').innerText = 'Área da pizza: ' + area.toFixed(2) + ' cm²';
}