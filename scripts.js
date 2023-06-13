const key = "45bd4cb7b9a534b3a20517785fb0e392"

function colocarDadosNaTela(dados){
    document.querySelector(".cidadeAtual").innerHTML = "Tempo em " + dados.name

    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp)+"ºC"

    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description

    document.querySelector(".umidade").innerHTML = "Umidade do ar: " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src= `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(city){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    colocarDadosNaTela(dados);
}

function clickInButton(){
    const city = document.querySelector(".city").value
   
    buscarCidade(city)
}