function calcularPagamento() {
    // Obter o valor total da conta inserido pelo usuário
    var totalConta = parseFloat(document.getElementById('totalConta').value);
    
    // Calcular o valor que cada um deve pagar
    var valorPorPessoa = totalConta / 3; // Divide o total por 3 para igualar o pagamento
    
    // Arredondar o valor para não ter centavos
    var valorCarlosAndre = Math.floor(valorPorPessoa);
    var valorFelipe = (totalConta - (valorCarlosAndre * 2)).toFixed(2); // O valor de Felipe é o total menos o valor de Carlos e André
    
    // Exibir o resultado
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '<p>Carlos deve pagar: R$ ' + valorCarlosAndre.toFixed(2) + '</p>';
    resultado.innerHTML += '<p>André deve pagar: R$ ' + valorCarlosAndre.toFixed(2) + '</p>';
    resultado.innerHTML += '<p>Felipe deve pagar: R$ ' + valorFelipe + '</p>';
}