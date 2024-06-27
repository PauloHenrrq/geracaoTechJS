let inicio = 30
let final = 90

let repeticoes = 10

let cont = 0 

for(let num = 1; num <= repeticoes; num++) {

    let numero = Number(prompt('Digite um número'))

    if(numero < final && numero > inicio) {
        cont += 1
    }
}

console.log(`Contagem dos números no intervalo: ${+ cont}`)