// Atributos: Senha - String, Agência - Number, Nº Conta - Number, Titular - String, Tipo(PJ ou PF) - String, Saldo - Number
// Métodos: Sacar, Depositar, Empréstimo, Saldo (Verificar a senha em cada método)

let conta = {
    titular: 'Paulo',
    senha: '190',
    agencia: 153,
    numeroConta: 131,
    saldo: 1000,
    tipo: 'PF',
    emprestimo: [],
    sacar: function(valor, senha) {
        // verificar se o valor é maior que o saldo
        if(senha == conta.senha) {
            if(conta.saldo >= valor) {
                conta.saldo -= valor
                console.log('Saque realizado com sucesso')
            }
            else {
                console.log('Saldo insuficiente')
            } 
        }
        else {
            console.log('Senha incorreta')
        }
    },
    depositar: function(valor, senha) {
        if (senha == conta.senha) {
            conta.saldo += valor
            console.log('Depósito realizado com sucesso')
        } else {
            console.log('Senha incorreta')
        }
    },
    consultarSaldo: function(senha){
        if (senha == conta.senha) {
            console.log(`Saldo: R$ ${conta.saldo}`)
        } else {
            console.log('Senha incorreta')
        }
    },
    fazerEmprestimo: function(valor, senha) {
        if(senha == conta.senha) {
            let qtdParcelas = 24
            let juros = 0.02
            let parcela = (valor/qtdParcelas) * (1 + juros)
            conta.saldo += valor
            let informacoesEmprestimo = [valor, qtdParcelas, parcela, juros]
            conta.emprestimo.push(informacoesEmprestimo)
            console.log(`Empréstimo de R$ ${valor} concedido. Saldo atual da conta ${conta.saldo}`)
        }
        else {
            console.log('Senha incorreta')
        }
    }
}