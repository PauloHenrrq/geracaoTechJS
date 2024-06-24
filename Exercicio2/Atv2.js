// Escreva um algoritmo que leia três valores. A, B, C. E informe se a soma de A + B é maior que C.

A = Number(prompt('Escreva o 1º valor: '))
B = Number(prompt('Escreva o 2º valor: '))
C = Number(prompt('Escreva o 3º valor: '))

if ((A + B) > C) {
    console.log(`A soma de ${A} + ${B} é maior que ${C}`)
} else {
    console.log(`${C} é maior que a soma de ${A} + ${B}`)
}