// Função que recebe como parâmetro o valor inicial e final de um intervalo e retorna a soma dos números do intervalo

// 1: Criar uma função para retornar (RETURN) um parâmetro inicial e final utilizando um PROMPT
// 2: Fazer um looping que utilize o parâmetro inicial e final como valores para fazer a soma dos números entre os números dos valores


function intervalo(v1=0, v2=0) {
    let inicio = v1
    let final = v2
    let soma = 0

    if (v2 >= v1) {
        for (inicio; inicio < final; inicio++) {
            soma += inicio
        }
    } 
    else {
        console.log(`O primeiro valor precisa ser menor que o segundo!`)       
    }

    return soma
}

let v1 = Number(prompt(`Escreva o 1º  número`))
let v2 = Number(prompt(`Escreva o 2º número`))

let somaN = (console.log(intervalo(v1, v2)))