// Faça um programa que leia um número inteiro N e depois imprima os N primeiros números naturais ímpares.

// 1: Fazer um PROMPT que receba um número INTEIRO (Tratamento de filtragem para que seja um número inteiro)
// 2: Converter o número do PROMPT para número inteiro utilizando TOFIXED(0)
// 3: Utilizar o número recebido do PROMPT para exibir a quantidade dos primeiros números NATURAIS ÍMPARES
// 4: Utilizar um CONSOLE.LOG para exibição de cada número

let numINT = Number(prompt(`Escreva um número inteiro: `))

let cont = 1

numINT.toFixed(0)

if (numINT <= 0 ) {
    console.log(`Escreva um número inteiro!!`)
}
else {
    console.log(`${cont}`)
    for (let i = 1; i <= (numINT - 1); i++) {
        console.log(`${cont += 2}`)
    }
}