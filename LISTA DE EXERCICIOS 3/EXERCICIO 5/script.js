function calcularLitros() {
    // Obter os valores do preço do litro e do valor do pagamento
    var preco = parseFloat(document.getElementById('preco').value);
    var valor = parseFloat(document.getElementById('valor').value);
    
    // Verificar se os valores são válidos
    if (preco <= 0 || valor <= 0) {
        alert('Por favor, insira valores válidos para o preço do litro e o valor do pagamento.');
        return;
    }
    
    // Calcular a quantidade de litros de gasolina
    var litros = valor / preco;
    
    // Exibir o resultado
    document.getElementById('resultado').innerText = 'Você conseguiu colocar ' + litros.toFixed(2) + ' litros de gasolina no tanque.';
}