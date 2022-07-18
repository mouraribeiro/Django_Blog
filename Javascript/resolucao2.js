var branco = 'preto'
var preto = 'cinza'
var cinza = 'branco'
var carro = 'preto'
var valor = 30000
var prestacao = 750


 //Resolução exercício 2 - LETRAS A E B
 
if(branco == 'branco' || branco == 'cinza'){
    console.log(true)
}else{
    console.log(false)
    console.log(`A variável ${branco} tem valor 'preto'`)
}


//LETRA C
if(carro === branco){
    console.log(true)
    
}else{
    console.log(false)
}

// LETRA D

var cavalo = carro == 'preto' ? 'cinza' : 'marron'
console.log(cavalo) //cinza

// LETRA E
let prestacoes = (30000-3000)/750

console.log(`O número de prestações a pagar serão ${prestacoes}`)


// LETRA E
//f) Somando as variáveis de cores é formada uma string de quantos caracteres?
cores = branco+preto+cinza
console.log(cores.length)
console.log(cores)

