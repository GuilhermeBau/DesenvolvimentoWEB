function calcularFerraduras() {
    // Obter o valor do número de cavalos
    var cavalos = document.getElementById('cavalos').value;
    
    // Verificar se o valor é válido
    if (cavalos <= 0) {
        alert('Por favor, insira um número válido de cavalos.');
        return;
    }
    
    // Calcular o número de ferraduras necessárias
    var ferraduras = cavalos * 4;
    
    // Exibir o resultado
    document.getElementById('resultado').innerText = 'O número de ferraduras necessárias é: ' + ferraduras;
}