// function ola() {
//     alert(`Olá mundo`)
// }

// --------------

// function calcularMedia(n1, n2, n3 = 10) {
//     let media = (n1 + n2 + n3) / 3
//     console.log(media)
//     return "I'M BACK"
// }

// calcularMedia(8, 8, 9)
// calcularMedia(8, 8, 9, 10)
// calcularMedia(8, 8)
// let mediaFinal = calcularMedia(8, 8, 5)
// console.log(mediaFinal)

// ---------------

// Função que recebe o nome e a idade de uma pessoa como parâmetro e mostre no console o nome e a idade e depois retorne apenas o nome

function receba(nome, idade) {
    console.log(`${nome} ${idade}`)
    return nome
}

let nome = receba('Paulo', '19 anos')
