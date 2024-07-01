// let endereco = [326462427, 'Rua Berimbales', 'Nº 201', 'Frifus', 'Guanaribas']

// let tamanho = endereco.length



// crie uma função que armazena 3 notas, lidas do usuário, em um array. O último elemento do array será a média calculada a partir das notas informadas pelo usuário.
// retorne o array

function media3notas() {
    let notas = []
    for (let i = 1; i <=3; i++){
        notas[i - 1] = Number(prompt(`Digite a ${i}º nota: `))
    }

    notas[3] = (notas[0] + notas[1] + notas[2]) / notas.length

    return notas
}

let arrayNotas = media3notas()
console.log(arrayNotas)
arrayNotas[3] = `A`
console.log(arrayNotas)
// adiciona o final
arrayNotas.push(`B`)
console.log(arrayNotas)

// exclusão do último elemento
let excluido = arrayNotas.pop()
console.log(arrayNotas)
console.log(excluido)

// adiciona ao inicio
arrayNotas.unshift('inicio')
console.log(arrayNotas)

// remover do inicio
console.log(arrayNotas.shift())
console.log(arrayNotas)

