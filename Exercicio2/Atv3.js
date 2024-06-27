// Faça um algoritmo que leia um número e informe se ele é par ou ímpar.

let numero = Number(prompt('Escreva um número: '))

if (numero%2 == 0) { 
    console.log(`${numero} é par`)
} else {
    console.log(`${numero} é impar`)
}