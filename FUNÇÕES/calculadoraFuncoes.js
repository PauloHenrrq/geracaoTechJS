// 4 operações básicas em função, com dois parâmetros obrigatórios

// função calculadora que recebe dois números e uma função como parâmetro e mostra o retorno da função no alert para o usuário

function soma(v1, v2) {
    return v1 + v2
}

function subtracao(v1, v2) {
    return v1 - v2
}

function multiplicacao(v1, v2) {
    return v1 * v2
}

function divisao(v1, v2) {
    if (v2 != 0 && v1 != 0) {
        return v1 / v2
    }
    else {
        return ('O valor não pode ser 0')
    }
}

function operacoes(v1, v2, funcao) {
    let func = eval(funcao)
    let resultado = func(v1, v2)
    alert(resultado)
    
}

let v1 = Number(prompt('Digite o primeiro número:'))
let v2 = Number(prompt('Digite o primeiro número:'))
let operacao = prompt('Escolha a operação matemática que deseja: \n somar \n subtracao \n multiplicacao \n divisao')

operacoes(v1, v2, operacao)