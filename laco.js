// repetir 3x São Longuinho
// console.log('São Longuinho')
// console.log('São Longuinho')
// console.log('São Longuinho')

// let quantasVezes = 3
// let i = 1
// let acumulator = 0

// // a cada vez que chamar são longuinho ganhará 100 reais
// while(i<= quantasVezes){
//     console.log('São Longuinho')
//     console.log('Ganhou 100')
//     acumulator += 100
//     i+=1
// }

// // escreva de 0 a 10 de Dois em Dois

// let numero = 0

// while(numero <= 10){
//     console.log(numero)
//     numero += 2
// }

// Faça a soma de todos os números pares de 0 a 100 e mostre o resultado no console

let numero = 0
let final = 100
let soma

while(numero <= final){
    soma += numero
    numero += 2
}
while(numero <= final){
    if(numero%2==0 || numero%5==0){
        soma += numero
    }
    numero += 1
}

