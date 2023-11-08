function contar(){
    var inicio = document.getElementById('txti');
    var fim = document.getElementById('txtf');
    var passo = document.getElementById('txtp');
    var res = document.getElementById('res')


    if (inicio.length == 0 || fim.length == 0 || passo.length == 0  ){
        alert('ERRO! Faltam Dados.');
    }else{
        res.innerHTML = 'Contando...'
       var i = Number(inicio.value)
       var f = Number(fim.value)
       var p = Number(passo.value)

       for(var c = i; c <= f; c+= p){
        res.innerHTML += ` ${ c } \u{1F449}`
       }
       res.innerHTML += `\u{1F3C1}`
    }
}

