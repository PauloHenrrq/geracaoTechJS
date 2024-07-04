let valor = document.getElementById('valor')

let quantidadePecas = document.getElementById('quantidade')

let corEtiquetas = document.getElementsByName('cor')

let resposta = document.querySelector('div')

// desconto para cor

function calcularDesconto() {
    let descontoCor = 0
    let descontoQuantidade = 0
    let cor = 'Indefinida'

    if (corEtiquetas[0].checked) {
        descontoCor = 0.5
        cor = corEtiquetas[0].value
    }
    else if (corEtiquetas[1].checked) {
        descontoCor = 0.3
        cor = corEtiquetas[1].value
    }
    else if (corEtiquetas[2].checked) {
        descontoCor = 0.1
        cor = corEtiquetas[2].value
    }
    else {

    }

    // desconto por quantidade
    if (quantidadePecas.value > 2) {
        descontoQuantidade = 0.1    
    }

    let valorFinal = (valor.value * quantidadePecas.value) * (1 - (descontoCor + descontoQuantidade))

    resposta.innerHTML = 
    `
        <ul>
            <li> Preço Original da Peça: R$ ${valor.value} </li>
            <li> Cor da Etiqueta: R$ ${cor} </li>
            <li> Quantidade de peças: R$ ${quantidadePecas} </li>
            <li> Desconto por cor: R$ ${descontoCor * 100}% </li>
            <li> Desconto por Quantidade: R$ ${descontoQuantidade * 100} </li>
            <li></li>
            <li> Total da compra com desconto: R$ ${valorFinal} </li>
        </ul>
    `
}


