
let entrada = document.getElementById('entrada')
let principal = document.getElementById('pratoPrincipal')
let bebida = document.getElementById('bebidas')
let sobremesa = document.getElementById('sobremesa')
let taxaServico = document.getElementById('taxaServico')
let subTotal = document.getElementById('subtotal')
let total = document.getElementById('total')

function restaurante() {
    console.log("campo alterado")
}

function calcularConta() {
    let valorTotal = Number(entrada.value) + Number(principal.value) + Number(bebida.value) + Number(sobremesa.value)

    let valorTaxa = valorTotal * 0.1

    let pagamentoFinal = valorTotal + valorTaxa
    return [valorTotal, valorTaxa, pagamentoFinal]
}

function mostrarConta() {
    let valores = calcularConta() // [valorTotal, valorTaxa, pagamentoFinal]

    subTotal.value = valores[0]

    taxaServico.value = valores[1]

    total.value = valores[2]
}