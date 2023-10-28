var idade = 170
if (idade < 16){
    console.log (`Não vota`)
} else {
    if (idade < 18 || idade >= 70) {
        console.log('Você vota opcionalmente')
    }
    else {
        console.log('Você é obrigado a votar')
    }
}   