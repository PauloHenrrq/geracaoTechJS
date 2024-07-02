


// let enderecoArray = ['Rua', 'Bairro', 'Cidade', 'Estado', 'CEP']

// for (let i = 0; i < enderecoArray.length; i++) {
    
//     console.log(enderecoArray[i])
// }

// for(let elemento in enderecoArray) {
//     console.log(elemento)
// }

// let endereco = { rua: 'Rua', bairro: 'Bairro', cidade: 'Cidade', estado: 'Estado', cep: 'CEP', 1:'coisa'}

// console.log(enderecoArray[0])
// console.log(endereco.rua)



// let pessoa = {
//     nome: 'Ana',
//     idade: 20, 
//     altura: 1.70,   
//     peso: 60,
//     calcularIMC: function() { return pessoa.peso/(pessoa.altura**2) },
//     chaves: pessoa.key,
//     tamanhoObjeto: pessoa.length
// }

// for(let chave of pessoa) {
//     console.log(pessoa[chave])
// }

// console.log(`Nome: ${pessoa.nome}, idade: ${pessoa.idade}, altura: ${pessoa.altura}, peso: ${pessoa.peso}`)

// console.log(pessoa)

// pessoa.corFavorita = 'Azul'

// delete pessoa.idade

// console.log(pessoa)

// let produto = { nome: 'Camiseta', preco: 39.90, cor: 'Azul', tamanho: 'M', disponibilidade: true, calcularDesconto: function(desconto){return produto.preco * (1-desconto/100)}}

// let produto2 = ['Camiseta', 39.90, 'azul', 'M', true]
// let produtoComDesconto = produto.calcularDesconto(5)    




// cadastrar 5 produtos
// crie um array com 5 produtos.
// Cada produto deve ser um objeto com as propriedades nome, preco, cor, tamanho e disponibilidade.
// Crie um método calcularDesconto que recebe um número e retorna o preço com desconto. 
// Crie um método alterar disponibilidade. Se a disponibilidade estiver true, altere para false e vice-verse. IF/ELSE

let produtos = []



for (let i = 1; i <= 5; i++) {
    let nome = prompt(`Nome do produto nº${i}`)
    let preco = parseFloat(`Preço do produto nº${i}`)
    let cor = prompt(`Cor do produto nº${i}`)
    let tamanho = prompt(`Tamanho do produto nº${i}`)
    let disponibilidade = confirm(`O produto  de nº${i} está disponivel?`)

    let produto = {
        nome: nome,
        preco: preco,
        cor: cor,
        tamanho: tamanho,
        disponibilidade: disponibilidade,
        calcularDesconto: function(desconto=0) {
            return produto.preco*(1-desconto/100)
        },
        alterarDisponibilidade: function() {
            if (produto.disponibilidade) {
                produto.disponibilidade = false
            } else {
                produto.disponibilidade = true
            }
        }
    }

    produtos.push(produto)
}

console.log(produtos[1])
let produtoJSON = JSON.stringify(produtos[1])
console.log(produtoJSON)