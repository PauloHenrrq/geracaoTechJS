let frutas = ['maça', 'uva', 'banana']

let numeros = [1, 2, 3, 4]

// sem necessidade de armazenar retorno
frutas.forEach((FRUTA) => console.log(FRUTA.toUpperCase()))
console.log(frutas)

let numerosDobro = numeros.map((num) => num * 2)
console.log(numeros)
console.log(numerosDobro)

// filter
let par = numeros.filter((x) => {
    if(x%2==0){
        return x
    }
})

// construir um array de 4 objetos. Cada objeto terá as seguintes chaves: nome, nota. Sendo a nota entre 0 e 10.

let alunos = [
    {
        nome: 'Ana',
        nota: 8
    },
    {
        nome:'Paulo',
        nota: 10
    },
    {
        nome: 'Maria',
        nota: 5
    },
    {
        nome: 'José',
        nota: 7
    }
]

// montar um array de objetos, contendo apenas os aprovados (nota maior que 7)

let aprovados = alunos.filter((aluno) => {
    if (aluno.nota >= 7) {
        return aluno //todo o objeto
    }
})

let nomeAprovados = aprovados.map((elemento) => elemento.nome)

// valor total dos aprovados

let notaAprovados = aprovados.map((elemento) => elemento.nota)

let valorTotalAprovados = notaAprovados.reduce((soma, num) => soma += num)

// // //

let somaNumeros = numeros.reduce((soma, num) => soma += num)

console.log(somaNumeros)