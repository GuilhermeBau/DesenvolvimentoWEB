let ipQuantidadePessoas = document.querySelector ("#quantidadePessoas")
let botaoIngredientes = document.querySelector ("#botaoIngredientes")
let divOvo = document.querySelector ("#ovo")
let divQueijos = document.querySelector ("#queijo")

function calcularComida(){
    let quantidadePessoas = Number (ipQuantidadePessoas.value)
    let ovo = quantidadePessoas * 2

    let queijo = quantidadePessoas * 50

    divOvo.innerHTML = "A QUANTIDADE DE OVOS SERA: " + ovo 
    divQueijos.innerHTML = "A QUANTIDADE DE QUEIJO SERA: " + queijo + " GRAMAS"

}   
botaoIngredientes.onclick = function(){
    calcularComida()
}
