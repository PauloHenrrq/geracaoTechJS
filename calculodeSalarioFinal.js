// beneficios sob tempo de empresa

// menos de 1 ano ------ 0% sob o salario base
// de 2 a 5 anos ------- 10% sob o salario base
// de 5 a 10 anos ------- 15% sob o salario base
// mais de 10 anos --------- 20% sob o salario base

let nome = prompt('Qual seu nome?')
let salario = Number(prompt(`${nome}, qual o seu salario?`))
let tempo = (Number(prompt(`${nome}, há quanto tempo você está na empresa? \n 1 - "menos de 1 ano a 2 anos \n 2 - "2 a 5 anos" \n 3 - "5 a 10 anos" \n 4 - "mais de 10 anos"`)))
let crianca = prompt(`${nome}, você possui filhos que possui idade inferior a 7 anos? (Sim/Não)`)

VA = 1000.00
VT = 200.00

crianca.toLowerCase()

if (crianca !== 'sim' && crianca !== 'não') {
    console.log('Escreva "sim" ou "não"')
}
else if (salario == NaN) {
    console.log('Precisa ser um número!')
}
else {
    switch (tempo) {
        case 1:
            if (crianca == 'sim') {
                qntFilhos = Number(prompt(`${nome}, quantos filhos com idade inferior a 7 anos você tem?`))
                beneficioDep = qntFilhos * 500
                salarioB = salario + beneficioDep
                salarioF = salarioB / 1.17
                
                console.log(`Salário final (descontado INSS e FGTS): R$ ${salarioF.toFixed(0)}`)
                console.log(`Vale Alimentação; R$ ${VA}`)
                console.log(`Vale transporte: R$ ${VT}`)
                salarioFB = salarioF + VA + VT
                console.log(`Somatória do salário e benefícios: R$ ${salarioFB.toFixed(0)}`)
                
            } else {
                salarioF = salario / 1.17
                
                console.log(`Salário final (descontado INSS e FGTS): R$ ${salarioF.toFixed(0)}`)
                console.log(`Vale Alimentação; R$ ${VA}`)
                console.log(`Vale transporte: R$ ${VT}`)
                salarioFB = salarioF + VA + VT
                console.log(`Somatória do salário e benefícios: R$ ${salarioFB.toFixed(0)}`)
            }
    
            break;

        case 2:
            if (crianca == 'sim') {
                qntFilhos = Number(prompt(`${nome}, quantos filhos com idade inferior a 7 anos você tem?`))
                beneficioDep = qntFilhos * 500
                salarioB = salario + beneficioDep

                

                salarioF = salarioB / 1.17
                
                console.log(`Salário final (descontado INSS e FGTS): R$ ${salarioF.toFixed(0)}`)
                console.log(`Vale Alimentação; R$ ${VA}`)
                console.log(`Vale transporte: R$ ${VT}`)
                salarioFB = salarioF + VA + VT
                console.log(`Somatória do salário e benefícios: R$ ${salarioFB.toFixed(0)}`)
                
            } else {
                
            }
    
        default:
            console.log('Escolha um valor existente! \n 1 - "menos de 1 ano a 2 anos \n 2 - "2 a 5 anos" \n 3 - "5 a 10 anos" \n 4 - "mais de 10 anos"')
            break;
    }
}

// benefício por dependente
// 500,00 por dependente menor que 7 anos

// VA ----------- R$ 1000,00
// VT ----------- R$ 200,00

// DESCONTOS
// INSS ------------ 9% do salário base
// FGTS ------------ 8% do salário base

// com base nos critérios, ler as informações de um empregado e exibir na tela o total a receber descrevendo cada um dos custos, tanto benefícios quanto descontos, por categoria.

// Nome:
// Salário base:
// Bônus por tempo de serviço:
// Auxílio creche:
// Vale Transporte:
// Vale Alimentação:
// Desconto INSS;
// Desconto FGTS:
// Total a receber: