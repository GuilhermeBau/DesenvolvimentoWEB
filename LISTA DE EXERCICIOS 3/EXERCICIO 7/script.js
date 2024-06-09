function calcularDiasDesdeInicioDoAno() {
    // Obter os valores do dia e mês
    var dia = parseInt(document.getElementById('dia').value);
    var mes = parseInt(document.getElementById('mes').value);
    
    // Verificar se os valores são válidos
    if (dia < 1 || dia > 30 || mes < 1 || mes > 12) {
        alert('Por favor, insira valores válidos para o dia e o mês.');
        return;
    }
    
    // Calcular os dias desde o início do ano
    var diasDesdeInicio = (mes - 1) * 30 + dia;
    
    // Exibir o resultado
    document.getElementById('resultado').innerText = 'Dias desde o início do ano: ' + diasDesdeInicio;
}