function calcularDiasDeVida() {
    // Obter os valores de nome e idade
    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;
    
    // Verificar se os valores são válidos
    if (idade < 0) {
        alert('Por favor, insira uma idade válida.');
        return;
    }
    
    // Calcular o número de dias de vida
    var diasDeVida = idade * 365;
    
    // Exibir o resultado
    document.getElementById('resultado').innerText = nome.toUpperCase() + ', VOCÊ JÁ VIVEU ' + diasDeVida + ' DIAS';
}