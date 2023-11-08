function contar(){
    var ini = document.getElementById('inicio')
    var fi = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var resultado = document.getElementById('res')


    if (ini.value.lenght == 0 || fi.value.lenght == 0 || pas.value.lenght == 0  ){
        alert('ERRO! Faltam Dados.')
    }
}