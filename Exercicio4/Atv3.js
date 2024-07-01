// Uma loja deseja cadastrar 5 clientes e verificar se o faturamento da loja foi superior a loja B (faturamento = 54000). Se o faturamento atingir esse valor mostre na tela uma mensagem contendo em quanto foi superado o faturamento.

// 1: Fazer um looping que gere 5 clientes com valores diferentes e os somem
// 2: Com a soma do looping, diminuir com a lojaB que possui um faturamento fixo de 54000
// 3: Se (IF) o faturamento atingir 54000, fazer com que a soma do looping seja diminuido com 54000 e gere o resultado.

let lojaB = 54000
let soma = 0

for (let i = 1; i <= 5; i++) {
    let clientes = Number(prompt(`Escreva seu valor gasto: `))
    soma += clientes
    
}
if (lojaB <= soma) {
    console.log(`Quantidade do faturamento a mais: ${soma - lojaB}`)
} else {
    console.log(`Quantidade inferior ao faturamento da lojaB`)
}
