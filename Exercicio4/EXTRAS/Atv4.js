// Faça um programa que peça ao usuário para digitar 10 valores e some-os.

soma = 0

for (let rep = 1; rep <= 10; rep++) {
    let valor = Number(prompt(`Escreva um número`))
    soma += valor
}

console.log(soma)

