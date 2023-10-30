function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagens')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `<h2>Agora são ${hora} horas</h2>` 
if (hora >= 0 && hora < 12){
    //Bom dia
    
    img.scr = 'fotomanha.jpg'
}else if(hora >= 12 && hora < 18){  
    img.src = 'fototarde.jpg'
    document.body.style.background = '#DFBE72'
    //Boa tarde
}else{
    img.src = 'fotonoite.jpg'
    document.body.style.background = '#002778'
    //Boa noite
}

}

