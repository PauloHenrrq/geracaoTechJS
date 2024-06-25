// Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar, e imprima o resultado desta operação.

let numero = Number(prompt('Escreva um número: '))

if (numero%2 == 0) {
    console.log(`${numero + 5}`)
} else {
    console.log(`${numero + 8}`)
}