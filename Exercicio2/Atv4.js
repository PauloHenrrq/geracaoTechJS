// Faça um algoritmo que leia dois valores inteiros A e B. Se os valores forem iguais deverá se somar os dois, caso contrário, multiplique A por B.

let A = Number(prompt('Escreva o 1º número: '))
let B = Number(prompt('Escreva o 2º número: '))

if (A == B) {
    console.log(`${A + B}`)
} else {
    console.log(`${A * B}`)
}