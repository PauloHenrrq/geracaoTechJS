// Leia dois números e informe o maior deles.

let num1 = Number(prompt('Escreva o 1º número: '))
let num2 = Number(prompt('Escreva o 2º número: '))

if (num1 > num2) {
    console.log(`${num1} é maior que ${num2}`)
} 
else if(num1 < num2) {
    console.log(`${num2} é maior que ${num1}`)
}
else {
    console.log(`${num1} é igual ao ${num2}`)
}