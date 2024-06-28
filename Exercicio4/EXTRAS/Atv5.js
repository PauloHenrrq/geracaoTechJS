// Escreva um programa que leia 10 números e escreva o menor valor lido e o maior valor lido.

let maior
let menor
let num

for (let a = 1; a <= 4; a++) {
    num = Number(prompt('Escreva um número'))
    if (a==1) {
        maior = num
        menor = num
    }
    if (maior>num) {
        maior = num
    }
    if (menor<num) {
        menor = num
    }
}

console.log(`O maior número é: ${maior}`)
console.log(`O menor número é: ${menor}`)