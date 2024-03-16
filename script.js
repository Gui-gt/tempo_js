function carregar(){
var data = new Date()
var hora = data.getHours()
var res = document.getElementById('res')
if(hora >= 0 && hora < 12){
    res.innerHTML = `Bom dia`
    Image.src = `https://tudosobreespiritualidade.com.br/wp-content/uploads/2020/11/b3-5.jpg`
    document.body.style.background = `pink`
}else if(hora >= 12 && hora < 18){
    res.innerHTML = `boa tarde`
    document.body.style.background = `orange`
}else{
    res.innerHTML = `Boa noite`
    document.body.style.background = `blue`
}
}