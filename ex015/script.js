function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('{ERROR} Verifique os dados e tente novamente!')
    }
    s = (fano - ano)

    res.innerHTML = `Tem ${s} de idade`

    
}