function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()

    
    if(hora < 10){
        hora = "0" + hora;
    }
    if(min < 10){
        min = "0" + min;
    }
    if(sec < 10){
        sec= "0" + sec;
    }


    msg.innerHTML = `Agora são ${hora} : ${min} : ${sec} horas.`

    

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'Foto Manha.jpg'
        document.body.style.background = "#e2cd9f"
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        img.src = 'Foto Tarde.jpg'
        document.body.style.background = "#b9846f"
    } else {
        //BOA NOITE
        img.src = 'Foto Noite.jpg'
        document.body.style.background = "#515154"
    }

    setTimeout(carregar,1000);
}
