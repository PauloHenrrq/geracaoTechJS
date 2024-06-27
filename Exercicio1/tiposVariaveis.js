let variavelTipoLet = 'coisa'

var variavelTipoVar = 'coisa2'

const variavelTipoConst = 'Káthia'

variavelTipolet = 1

var variavelTipoVar = 25

// leia o nome, idade e endereço. Armazene em variáveis e mostre no console o texto no formato:
// 'Fulano tem 19 anos e mora em Fortaleza'
// NOME tem IDADE e mora em ENDEREÇO

let nome = prompt('Digite seu nome: ')
let idade = prompt('Digite sua idade: ')
let endereco = prompt('Digite seu endereço: ')

idade = Number(idade)
// exibição das informações no console
// 'Fulano tem 19 anos e mora em Fortaleza'

console.log(nome + ' tem ' + idade + ' anos e mora em ' + endereco)
console.log(`${nome} tem ${idade} anos e mora em ${endereco}`)

// 'Daqui a 10 anos Fulano terá 29 anos'

console.log('Daqui a 10 anos ' + nome + ' terá ' + (idade + 10))
console.log(`Daqui a 10 anos ${nome} terá ${idade + 10}`)