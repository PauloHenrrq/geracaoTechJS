let vermelho = document.getElementsByTagName('button')[0]
let azul = document.getElementsByTagName('button')[1]
let verde = document.getElementsByTagName('button')[2]

let quadro = document.querySelector('.quadradop')

function mudarCor(cor) {
    quadro.style.background = cor
}

