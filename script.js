function carregar(){
    let data = new Date()
    let hora = data.getHours()
    let res = document.getElementById('res')
    hora = 18
    if(hora >= 0 && hora < 12){
        res.innerHTML = `Bom dia`
        document.body.style.background = `pink`
    }else if(hora >= 12 &&  hora < 18){
        res.innerHTML = `boa tarde`
        document.body.style.background = `orange`
    }else{
        res.innerHTML = `Boa noite`
        document.body.style.background = `rgb(0, 106, 255)`
    }
}