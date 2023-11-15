res = document.getElementById('res')
let valores = []

function isNumero(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) && Number(n) >= 1 && Number(n) <= 100;
}

function inLista(n, l) {
    return l.indexOf(Number(n)) !== -1;
}

function adicionar() {
    let num = document.getElementById('fnum');
    
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        alert('Valor adicionado com sucesso');
    } else {
        alert('Valor inválido ou já está na lista');
    }
}