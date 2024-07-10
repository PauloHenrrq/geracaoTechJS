async function converterMoeda(codigoMoeda) {
    let resposta = await fetch(`https://economia.awesomeapi.com.br/last/${codigoMoeda}-BRL`)
    
    let cotacao = await resposta.json()
    
    montarTela(await cotacao)
}

function montarTela(objeto) {
    let conversaMoedaDiv = document.getElementById('conversaoMoeda')

    let titulo = document.createElement('h1')
    titulo.innerHTML = objeto.name

    let valor = document.createElement('p')
    let valorOriginalReal = document.getElementById('valor').value
    valor.innerHTML = `R$ ${valorOriginalReal}`

    let valorConvertido = document.createElement('p')
    valorConvertido.innerHTML = `R$ ${valorOriginalReal / objeto.bid}`

    conversaMoedaDiv.appendChild(titulo)
    conversaMoedaDiv.appendChild(valor)
    conversaMoedaDiv.appendChild(valorConvertido)

    let dataCotacao = document.createElement('h5')
    dataCotacao = objeto.create_date
    conversaMoedaDiv.appendChild(dataCotacao)
}

let btnUsd = document.getElementById('usd')
btnUsd.addEventListener('click', ()=>{converterMoeda('EUR')})

let btnEur = document.getElementById('eur')
btnEur.addEventListener('click', ()=> {converterMoeda('EUR')})

let btnBtc = document.getElementById('btc')
btnBtc.addEventListener('click', ()=>{converterMoeda('BTC')})