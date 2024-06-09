function calcularValor() {
    // Obter o valor do peso do prato
    var peso = parseFloat(document.getElementById('peso').value);
    
    // Verificar se o valor é válido
    if (peso <= 0) {
        alert('Por favor, insira um peso válido para o prato montado.');
        return;
    }
    
    // Preço por quilo de refeição
    var precoPorQuilo = 12.00;
    
    // Calcular o valor a pagar
    var valorAPagar = peso * precoPorQuilo;
    
    // Exibir o resultado
    document.getElementById('resultado').innerText = 'Valor a pagar: R$ ' + valorAPagar.toFixed(2);
}