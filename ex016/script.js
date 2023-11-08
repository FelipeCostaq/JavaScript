function contar(){
    var inicio = document.getElementById('txti');
    var fim = document.getElementById('txtf');
    var passo = document.getElementById('txtp');
    var res = document.getElementById('res')


    if (inicio.length == 0 || fim.length == 0 || passo.length == 0  ){
        alert('ERRO! Faltam Dados.');
        res.innerHTML = `Dados incompletos`
    }else{
        res.innerHTML = 'Contando... <br>'
       var i = Number(inicio.value)
       var f = Number(fim.value)
       var p = Number(passo.value)
       if(p <= 0){
        window.alert('Passo invalido. Considerando passo 1')
        p = 1
       }
       if(i < f){ 
        //Contagem Crescente
        for(var c = i; c <= f; c+= p){
            res.innerHTML += ` ${ c } \u{1F449}`
       }
    }else{
        //Contagem Regressiva
        for(var c = i; c >= f; c -= p){
            res.innerHTML += ` ${c} \u{1F449}`
        }

    }

       res.innerHTML += `\u{1F3C1}`
    }
}

