let min = 1

let descontoLimite = 25

let valorCompra = 500.00

let incremento = 100.00

for(let num = min ; num <= descontoLimite ; num++) {
    let valorFinal = valorCompra - (valorCompra * num / 100)
    console.log(`Valor da Compra: ${valorCompra} - ${num}% - ${valorFinal}`)
    valorCompra += incremento
}

// if (compra <= 499) {
//     console.log(`Valor da compra: ${compra}`)
//     console.log(`Porcentagem de desconto: 0%`)
//     console.log(`Valor final: ${compra}`)
// }

// R$ 500 ----- 1%
// R$ 600 ----- 2% ...
// ? ----- 25%