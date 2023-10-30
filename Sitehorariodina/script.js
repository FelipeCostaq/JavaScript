function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('foto')
var data = new Date()
//var hora = data.getHours()
hora = 18
msg.innerHTML = `<h2>Agora são ${hora} horas</h2>` 
if (hora >= 0 && hora < 12){
    //Bom dia
    img.scr = 'img/Manhã.jpg'
}else if(hora >= 12 && hora < 18){
    img.src = 'img/Tarde.jpg'
    //Boa tarde
}else{
    img.src = 'img/Noite.jpg'
    //Boa noite
}

}

