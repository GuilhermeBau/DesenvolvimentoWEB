function formatarNumero() {
    // Obter o número digitado pelo usuário
    var numero = parseInt(document.getElementById('numero').value);
    
    // Extrair a centena, dezena e unidade do número
    var centena = Math.floor(numero / 100);
    var dezena = Math.floor((numero % 100) / 10);
    var unidade = numero % 10;
    
    // Construir a saída formatada
    var saida = document.getElementById('saida');
    saida.innerHTML = '<p>CENTENA = ' + centena + '</p>';
    saida.innerHTML += '<p>DEZENA = ' + dezena + '</p>';
    saida.innerHTML += '<p>UNIDADE = ' + unidade + '</p>';
}