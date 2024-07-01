// Faça um programa que receba um número e usando laços de repetição calcule e mostre a tabuada desse número.

// 1: Fazer com que seja introduzido um número onde será colocado repetidamente
// 2: Fazer com que a cada repetição o número da "tabuada" que irá multiplicar o número introduzido some + 1 (?++)
// 3: Utilizar um console.log para que a cada multiplicação realizada apareça no console (mostrando a multiplicação feita e o resultado)

let num = Number(prompt(`Escreva o valor para retornar na tabuada: `))

console.log(`Tabuada do ${num}:`)

for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${num} = ${i * num}`)
}

