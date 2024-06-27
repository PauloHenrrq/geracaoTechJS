// beneficios sob tempo de empresa

// menos de 1 ano ------ 0% sob o salario base
// de 2 a 5 anos ------- 10% sob o salario base
// de 5 a 10 anos ------- 15% sob o salario base
// mais de 10 anos --------- 20% sob o salario base

let nome = prompt('Qual seu nome?')
let salario = Number(prompt(`${nome}, qual o seu salario?`))
if (isNaN(salario)) {
    console.log('Precisa ser um número!')
}
else {
    tempo = (Number(prompt(`${nome}, há quanto tempo você está na empresa? \n 1 - "menos de 1 ano a 2 anos \n 2 - "2 a 5 anos" \n 3 - "5 a 10 anos" \n 4 - "mais de 10 anos"`)))
    crianca = prompt(`${nome}, você possui filhos que possui idade inferior a 7 anos? (Sim/Não)`)
}

VA = 1000.00 // Vale Alimentação
VT = 200.00 // Vale Transporte
INSS = 1.09
FGTS = 1.08



crianca.toLowerCase()

if (crianca !== 'sim' && crianca !== 'não') {
    console.log('Escreva "sim" ou "não"')
}
else {
    switch (tempo) {
        case 1:
            if (crianca == 'sim') {
                qntFilhos = Number(prompt(`${nome}, quantos filhos com idade inferior a 7 anos você tem?`))
                beneficioDep = qntFilhos * 500
                salarioB = salario + beneficioDep

                console.log(`Nome: ${nome}`)
                console.log(`Salário Base: ${salario}`)
                console.log(`Bônus por tempo de serviço: 0`)
                console.log(`Auxílio Creche: ${beneficioDep}`)
                console.log(`Vale Transporte: ${VT}`)
                console.log(`Vale Alimentação: ${VA}`)
                console.log(`Desconto INSS: ${salario - INSS}`)
                console.log(`Desconto FGTS: ${salario - FGTS}`)
                console.log(`Total a receber: ${salario + beneficioDep + VT + VA - INSS - FGTS}`)

            } else {
                console.log(`Nome: ${nome}`)
                console.log(`Salário Base: ${salario}`)
                console.log(`Bônus por tempo de serviço: 0`)
                console.log(`Auxílio Creche: 0`)
                console.log(`Vale Transporte: ${VT}`)
                console.log(`Vale Alimentação: ${VA}`)
                console.log(`Desconto INSS: ${salario - INSS}`)
                console.log(`Desconto FGTS: ${salario - FGTS}`)
                console.log(`Total a receber: ${salario + VT + VA - INSS - FGTS}`)
            }

            break;

        case 2:
            if (crianca == 'sim') {
                qntFilhos = Number(prompt(`${nome}, quantos filhos com idade inferior a 7 anos você tem?`))
                beneficioDep = qntFilhos * 500
                salarioB = salario + beneficioDep

                bonus = (salario * 1.10) - salario

                console.log(`Nome: ${nome}`)
                console.log(`Salário Base: ${salario}`)
                console.log(`Bônus por tempo de serviço: ${bonus}`)
                console.log(`Auxílio Creche: ${beneficioDep}`)
                console.log(`Vale Transporte: ${VT}`)
                console.log(`Vale Alimentação: ${VA}`)
                console.log(`Desconto INSS: ${salario - INSS}`)
                console.log(`Desconto FGTS: ${salario - FGTS}`)
                console.log(`Total a receber: ${salario + bonus + beneficioDep + VT + VA - INSS - FGTS}`)

            } else {
                console.log(`Nome: ${nome}`)
                console.log(`Salário Base: ${salario}`)
                console.log(`Bônus por tempo de serviço: ${bonus}`)
                console.log(`Auxílio Creche: 0`)
                console.log(`Vale Transporte: ${VT}`)
                console.log(`Vale Alimentação: ${VA}`)
                console.log(`Desconto INSS: ${salario - INSS}`)
                console.log(`Desconto FGTS: ${salario - FGTS}`)
                console.log(`Total a receber: ${salario + bonus + VT + VA - INSS - FGTS}`)
            }

            break;
        case 3:
            if (crianca == 'sim') {
                qntFilhos = Number(prompt(`${nome}, quantos filhos com idade inferior a 7 anos você tem?`))
                beneficioDep = qntFilhos * 500
                salarioB = salario + beneficioDep

                bonus = (salario * 1.15) - salario

                console.log(`Nome: ${nome}`)
                console.log(`Salário Base: ${salario}`)
                console.log(`Bônus por tempo de serviço: ${bonus}`)
                console.log(`Auxílio Creche: ${beneficioDep}`)
                console.log(`Vale Transporte: ${VT}`)
                console.log(`Vale Alimentação: ${VA}`)
                console.log(`Desconto INSS: ${salario - INSS}`)
                console.log(`Desconto FGTS: ${salario - FGTS}`)
                console.log(`Total a receber: ${salario + bonus + beneficioDep + VT + VA - INSS - FGTS}`)

            } else {
                console.log(`Nome: ${nome}`)
                console.log(`Salário Base: ${salario}`)
                console.log(`Bônus por tempo de serviço: ${bonus}`)
                console.log(`Auxílio Creche: 0`)
                console.log(`Vale Transporte: ${VT}`)
                console.log(`Vale Alimentação: ${VA}`)
                console.log(`Desconto INSS: ${salario - INSS}`)
                console.log(`Desconto FGTS: ${salario - FGTS}`)
                console.log(`Total a receber: ${salario + bonus + VT + VA - INSS - FGTS}`)
            }

            break;
        case 4:
            if (crianca == 'sim') {
                qntFilhos = Number(prompt(`${nome}, quantos filhos com idade inferior a 7 anos você tem?`))
                beneficioDep = qntFilhos * 500
                salarioB = salario + beneficioDep

                bonus = (salario * 1.20) - salario

                console.log(`Nome: ${nome}`)
                console.log(`Salário Base: ${salario}`)
                console.log(`Bônus por tempo de serviço: ${bonus}`)
                console.log(`Auxílio Creche: ${beneficioDep}`)
                console.log(`Vale Transporte: ${VT}`)
                console.log(`Vale Alimentação: ${VA}`)
                console.log(`Desconto INSS: ${salario - INSS}`)
                console.log(`Desconto FGTS: ${salario - FGTS}`)
                console.log(`Total a receber: ${salario + bonus + beneficioDep + VT + VA - INSS - FGTS}`)

            } else {
                console.log(`Nome: ${nome}`)
                console.log(`Salário Base: ${salario}`)
                console.log(`Bônus por tempo de serviço: ${bonus}`)
                console.log(`Auxílio Creche: 0`)
                console.log(`Vale Transporte: ${VT}`)
                console.log(`Vale Alimentação: ${VA}`)
                console.log(`Desconto INSS: ${salario - INSS}`)
                console.log(`Desconto FGTS: ${salario - FGTS}`)
                console.log(`Total a receber: ${salario + bonus + VT + VA - INSS - FGTS}`)
            }

            break;

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