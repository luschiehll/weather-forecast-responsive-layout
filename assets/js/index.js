const key = "c4c8c75800cbb322e68cff953658ede4"

function colocarDadosNaTela(dados) {
    document.querySelector(".cidades").innerHTML = "Tempo em " + dados.name

    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"

    document.querySelector(".forecast").innerHTML = dados.weather[0].description

    document.querySelector(".moisture").innerHTML = "Umidade: " + dados.main.humidity + "%"

    document.querySelector(".pequeno").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())

    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".city").value

    buscarCidade(cidade)
}