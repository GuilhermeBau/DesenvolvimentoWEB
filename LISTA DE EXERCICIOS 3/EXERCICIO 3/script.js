function calcularVendas() {
    // Obter os valores das quantidades de pães e broas vendidos
    var paes = document.getElementById('paes').value;
    var broas = document.getElementById('broas').value;
    
    // Verificar se os valores são válidos
    if (paes < 0 || broas < 0) {
        alert('Por favor, insira valores válidos para as quantidades de pães e broas.');
        return;
    }
    
    // Preços dos produtos
    var precoPao = 0.12;
    var precoBroa = 1.50;
    
    // Calcular o total arrecadado
    var totalPaes = paes * precoPao;
    var totalBroas = broas * precoBroa;
    var total = totalPaes + totalBroas;
    
    // Calcular 10% para a poupança
    var poupanca = total * 0.10;
    
    // Exibir o resultado
    document.getElementById('resultado').innerText = 
        'Total arrecadado com a venda: R$ ' + total.toFixed(2) + '\n' +
        'Valor a ser guardado na poupança: R$ ' + poupanca.toFixed(2);
}