// let elementoFilho = document.createElement('p')

// elementoFilho.innerHTML = 'Texto inserido no innerHTML de um parágrafo criado com o createElement do objeto document'

// let elementoPai = document.querySelector('body')

// elementoPai.appendChild(elementoFilho)

// let outroElementoFilho = document.createElement('h1')

// outroElementoFilho.innerHTML = 'Título criado com JS'

// elementoFilho.appendChild(outroElementoFilho)

let body = document.querySelector('body')

let div = document.querySelector('div')

let divH1 = document.createElement('h1')
let divUL = document.createElement('ul')

let ulLI = document.createElement('li')
let ulLI2 = document.createElement('li')

divH1.innerHTML = 'Paulo Henrique'
ulLI.innerHTML = '19 anos'
ulLI2.innerHTML = 'Rua berimbales pales bales'

div.appendChild(divH1, divUL)
div.appendChild(divUL)
divUL.appendChild(ulLI)
divUL.appendChild(ulLI2)



let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function montarTitulo(item, pai) {
    let titulo = document.createElement('h1')
    titulo.innerHTML = item
    pai.appendChild(titulo)
}

numeros.forEach((num) => montarTitulo(num, body))

 