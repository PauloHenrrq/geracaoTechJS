funcionarios = [
    {
        nome: 'PH',
        cargo: 'Desenv. Web',
        salario: 5000,
        gratificacao: 800,
        idade: 19
    },
    {
        nome: 'Pedro',
        cargo: 'Pedreiro',
        salario: 3000,
        gratificacao: 300,
        idade: 24
    },
    {
        nome: 'Irineu',
        cargo: 'Comediante',
        salario: 10000,
        gratificacao: 200,
        idade: 30
    },
    {
        nome: 'Sophia',
        cargo: 'Garçom',
        salario: 2200,
        gratificacao: 300,
        idade: 20
    },
    {
        nome: 'Ivanildo',
        cargo: 'Aposentado',
        salario: 5733,
        gratificacao: 0,
        idade: 72
    }
]
    
// 1º Questão - Mostre no console o nome da pessoa e quanto ela recebe em um texto formatado, para todos os itens do array, com uma string formatada.

funcionarios.forEach((item) => console.log(`${item.nome} recebe R$ ${item.salario + item.gratificacao} de salário e bonificação`))

// 2º Questão - Para o mesmo array de objetos pessoas, crie um novo array, com apenas os valores das gratificações

let gratificacoes = funcionarios.map((item) => console.log(item.gratificacao))

// 3º Questão - Utilizando o map, crie uma função que retorna um array, com os valores dobrados com o array de gratificações

let gratificacaoDobro = funcionarios.map((item) => console.log(item.gratificacao * 2))

// 4º Questão - Crie um array com as pessoas (objeto) que recebem mais que 4mil reais de salario.

let salario4000 = funcionarios.filter((item) => {
    if(item.salario > 4000) {
        return item.salario
    }
})
console.log(salario4000)

// 5º Questão - Crie um array com as pessoas (objeto) que têm mais de 20 anos.

let pessoas20anos = funcionarios.filter((item) => {
    if(item.idade > 20) {
        return item.idade
    }
})
console.log(pessoas20anos)

// 6º Questão - Exiba o valor total das gratificações. Utilize reduce. 

let totalGratificacao = funcionarios.reduce((total, item) => total += item.gratificacao,0)
console.log(totalGratificacao)
