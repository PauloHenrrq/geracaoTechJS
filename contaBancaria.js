const titular = prompt("Digite seu nome: ")
let senha = 'v011'
const senhaEntrada = prompt('Senha: ')


if (senha == senhaEntrada) {
    let saldo = Number(prompt(`Saldo bancário de ${titular}: `))
    let pergunta = prompt(`${titular}, o que deseja fazer?: \n depósito \n sacar \n extrato`)

    switch (pergunta) {
        case 'depósito':
            deposito = Number(prompt(`${titular}, quanto você deseja depositar?: `))
            console.log(`Saldo antigo: ${saldo}`)
            console.log(`Valor depositado: ${deposito}`)
            console.log(`Saldo atual: ${saldo + deposito}`)
            break;

        case 'sacar':
            saque = Number(prompt(`${titular}, quanto você deseja sacar? (Saldo atual: ${saldo})`))

            if (saque <= saldo) {
                console.log(`Saque realizado com sucesso! Saldo atual: ${saldo - saque}`)
            } else {
                console.log('O valor do saque é maior que o Saldo Bancário')
                console.log(`Saldo bancário: ${saldo}`)
            }
            break;

        case 'extrato':
            console.log(`Saldo atual de ${titular}: ${saldo}`)
            break;

        default:
            console.log('Tipo de desejo incorreto! Escolha entre "depósito", "saque", "extrato"')
            break;
    }
} else {
    console.log('Senha incorreta!')
}
