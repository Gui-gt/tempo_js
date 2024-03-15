function carregar(){
var data = new Date()
var hora = data.getHours()
var res = document.getElementById('res')
if(hora >= 0 && hora < 12){
    res.innerHTML = `Bom dia`
}else if(hora >= 12 && hora < 18){
    res.innerHTML = `boa tarde`
}else{
    res.innerHTML = `Boa noite`
}
}