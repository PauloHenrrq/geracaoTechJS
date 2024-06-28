let min = 1

let descontoLimite = 25

let valorCompra = 500.00

let incremento = 100.00

for(let num = min ; num <= descontoLimite ; num++) {
    let valorFinal = valorCompra - (valorCompra * num / 100)
    console.log(`Valor da Compra: ${valorCompra} - ${num}% - ${valorFinal}`)
    valorCompra += incremento
}

