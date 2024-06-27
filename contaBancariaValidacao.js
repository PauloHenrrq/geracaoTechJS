let senha = 123
let senhaUser = prompt('Digite a senha')

num = 1

while(num <= 3)
    if (senha == senhaUser) {
        console.log('Caminho Feliz')
        num += 3
    } 
    else {
        // quando a senha for diferente
        // permitir que o usuario digite a senha até 3 vezes e fazer a validação
        num += 1
        senhaUser = prompt('Digite a senha')
    }