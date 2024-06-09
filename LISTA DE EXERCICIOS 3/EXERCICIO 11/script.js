function calcularSalario() {
    // Obter o valor do salário do funcionário
    var salario = parseFloat(document.getElementById('salario').value);
    
    // Calcular o aumento em 15%
    var salarioAumentado = salario * 1.15;
    
    // Calcular o desconto de 8% de impostos
    var salarioFinal = salarioAumentado * 0.92;
    
    // Exibir os resultados
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '<p>Salário inicial: R$ ' + salario.toFixed(2) + '</p>';
    resultado.innerHTML += '<p>Salário com aumento de 15%: R$ ' + salarioAumentado.toFixed(2) + '</p>';
    resultado.innerHTML += '<p>Salário final com desconto de impostos (8%): R$ ' + salarioFinal.toFixed(2) + '</p>';
}