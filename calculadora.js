// 4 operações básicas em função, com dois parâmetros obrigatórios

// função calculadora que recebe dois números e uma função como parâmetro e mostra o retorno da função no alert para o usuário


function calculadora() {
    let v1 = Number(prompt('Digite o primeiro número:'))
    let v2 = Number(prompt('Digite o primeiro número:'))
    let operacao = prompt('Escolha a operação matemática que deseja: ')

    operacao = operacao.toLowerCase()

    switch (operacao) {
        case 'soma':
            console.log(`A soma entre ${v1} e ${v2} = ${v1 + v2}`)
            break;

        case 'subtração':
            console.log(`A subtração entre ${v1} e ${v2} = ${v1 - v2}`)
            break;

        case 'multiplicação':
            console.log(`A multiplicação entre ${v1} e ${v2} = ${v1 * v2}`)
            break;

        case 'divisão':
            if (v2 != 0 && v1 != 0) {
                console.log(`A divisão entre ${v1} e ${v2} = ${v1 / v2}`)
            }
            else
                console.log('O valor não pode ser 0')
            break;

        default:
            console.log('Escreva "soma", "subtração", "multiplicação" ou "divisão"')
            break;
    }
}

calculadora()