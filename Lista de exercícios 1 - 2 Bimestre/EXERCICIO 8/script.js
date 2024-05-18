let ipCodigo = document.querySelector("#ipCodigo")
let btCalcular = document.querySelector("#btCalcular")
let h3Resultado = document.querySelector("#h3Resultado")

function retornarProduto(){
    let codigo = Number (ipCodigo.value)
    if(codigo == 1){
        h3Resultado.innerHTML = "PARAFUSO"
    }
    if(codigo == 2){
        h3Resultado.innerHTML = "PORCA"
    }
    if(codigo == 3){
        h3Resultado.innerHTML = "PREGO"
    }
    if(codigo > 3 || codigo < 1){
        h3Resultado.innerHTML = "DIVERSOS"
    }
}
btCalcular.onclick = function(){
    retornarProduto()
}