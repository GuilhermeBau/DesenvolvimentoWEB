function calcularDistancia() {
    // Obter as coordenadas dos pontos
    var x1 = parseFloat(document.getElementById('x1').value);
    var y1 = parseFloat(document.getElementById('y1').value);
    var x2 = parseFloat(document.getElementById('x2').value);
    var y2 = parseFloat(document.getElementById('y2').value);
    
    // Calcular a distância entre os pontos usando a fórmula de distância euclidiana
    var distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    
    // Exibir o resultado
    document.getElementById('resultado').innerText = 'A distância entre os pontos é: ' + distancia.toFixed(2);
}