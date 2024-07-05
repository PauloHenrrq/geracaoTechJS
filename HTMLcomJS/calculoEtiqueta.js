let valor = document.getElementById('valor')

let quantidadePeca = document.getElementById('quantidade')

let corEtiquetas = document.getElementsByName('cor')

let resposta = document.querySelector('div')

// desconto para cor

function calcularDesconto() {
    let descontoCor = 0
    let descontoQuantidade = 0
    let cor = "indefinida"


    if (corEtiquetas[0].checked) {
        descontoCor = 0.5
        cor = corEtiquetas[0].value
    }
    else if (corEtiquetas[1].checked) {
        descontoCor = 0.3
        cor = corEtiquetas[1].value
    }
    else if (corEtiquetas[2].checked) {
        descontoCor = 0.15
        cor = corEtiquetas[2].value
    }

    //desconto por quantidade
    if (quantidadePeca.value > 2) {
        descontoQuantidade = 0.1
    }

    let valorFinal = (valor.value * quantidadePeca.value) * (1 - (descontoCor + descontoQuantidade))

    resposta.innerHTML = `
<ul>
<li>Preço Original da Peça: R$${valor.value}</li>
<li>Quantidade de peças: ${quantidadePeca.value} peças</li>
<li>Cor da etiqueta: ${cor}</li>
<li>Desconto por etiqueta:${descontoCor * 100}%</li>
<li>Desconto por quantidade:${descontoQuantidade * 100}%</li>
<li>Total da compra com desconto:R$${valorFinal}</li>
</ul>
`
}


