// Criar uma lista de Funcionários para guardar os dados pessoais de cada pessoa
// Criar uma lista de pessoas possuindo cada dado pessoal.
// Feito acima, utilizar o forEach e dentro criar uma div com a classe "cardFuncionario" (utilizando createElement), puxar ele em uma outra variável e utilizar essa nova variável para escrever um innerHTML com h2, img, h3, h3 e h3.
// Colocar na img o SRC e ALT
// Usar o funcionarios.length como medidor do FOR e a cada novo gerado, somar +1 (?++)


funcionarios = []

let qtd = Number(prompt(`Quantos funcionários serão registrados?`))

for (let i = 1; i <= qtd; i++) {
    let pessoa = {
        nome: prompt(`Escreva seu nome:`),
        img: prompt(`Coloque o url do seu link`),
        idade: prompt(`Escreva sua idade:`),
        cargo: prompt(`Qual seu cargo?`),
        salario: Number(prompt(`Escreva seu salário:`))
    }

    funcionarios.push(pessoa)
}

funcionarios.forEach(item => {
    let div = document.getElementById('containerFuncionarios')
    let divCard = document.createElement('div')
    divCard.classList.add('cardFuncionario')

    div.appendChild(divCard)

    let h2 = document.createElement('h2')
    let img = document.createElement('img')
    let p = document.createElement('p')
    let h3 = document.createElement('h3')
    let pp = document.createElement('p')

    divCard.appendChild(h2)
    divCard.appendChild(img)
    divCard.appendChild(p)
    divCard.appendChild(h3)
    divCard.appendChild(pp)

    h2.innerHTML = `Nome: ${item.nome}`
    img.src = item.img
    p.innerHTML = `Idade: ${item.idade}`
    h3.innerHTML = `Cargo: ${item.cargo}`
    pp.innerHTML = `Salário: ${item.salario}`
});



