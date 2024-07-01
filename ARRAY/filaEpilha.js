// let fila = [0,1,2,3,4,5,6,7,8,9,10]

// let ultimosAtendidos = []
// let atendimentoAmanha = []

// // 3 pessoas serão atendidas
// for(let i = 1; i <= 3; i++) {
//     ultimosAtendidos.push(fila.shift()) // remove a primeira pessoa da fila
//     ultimosAtendidos.unshift(ultimo) // adiciona a pessoa removida no início da fila de atendidos
// }

// let novoTamanhoLista = fila.length // 7 
// // os demais serão colocados na fila para o próximo dia

// for(let i = 1; i <= 7; i++) {
//     let proximo = fila.shift()
//     atendimentoAmanha.push(proximo)
// }



let numeros = [1,2,3]

function multiplicar(num) {
    return num ** 2
}

let numeroAoQuadrado = numeros.map((item) => multiplicar(item))
console.log(numeros)
console.log(numeroAoQuadrado)