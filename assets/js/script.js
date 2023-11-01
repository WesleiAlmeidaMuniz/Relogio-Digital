async function tempo(lat, lon) {
    const key = 'd65ba2cb16959ebdf77257f424c0e0a0'
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=pt_br&units=metric`).then(reposta => reposta.json())

    cidade(dados)
}

function cidade(dados) {
    var cidade = window.document.getElementById('cidade')
    var temp = Math.floor(dados.main.temp)

    cidade.innerHTML = `${dados.name} ${temp}°C`
}

function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('background');
    var dia = window.document.getElementById('dia');
    var cidade = window.document.getElementById('cidade')
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    var sec = data.getSeconds();

    const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']

    if (hora < 10) {
        hora = "0" + hora;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }


    msg.innerHTML = `${hora} : ${min} : ${sec}`
    dia.innerHTML = `${dias[data.getDay()]} - ${data.getDate()} `


    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.style.backgroundImage = "url('assets/image/Foto Manha.jpg')"
        document.body.style.background = "#e2cd9f"
        msg.style.color = '#F7AB0F'
        dia.style.color = '#F7AB0F'
        cidade.style.color = '#F7AB0F'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.style.backgroundImage = "url('assets/image/Foto Tarde.jpg')"
        document.body.style.background = "#b9846f"
        msg.style.color = 'white'
        dia.style.color = 'white'
        cidade.style.color = 'white'
    } else {
        //BOA NOITE
        img.style.backgroundImage = "url('assets/image/Foto Noite.jpg')"
        document.body.style.background = "#515154"
        msg.style.color = 'white'
        dia.style.color = 'white'
        cidade.style.color = 'white'
    }
    setTimeout(carregar, 1000);
}

navigator.geolocation.getCurrentPosition(function (position) {
    tempo(position.coords.latitude, position.coords.longitude);
});
