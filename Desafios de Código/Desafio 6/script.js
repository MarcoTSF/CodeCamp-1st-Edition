//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const arr = gets().split(', ')
let qualFiltro = 0;

//TODO: Print no console qual filtro deve ser utilizado de acordo com as moléculas na entrada

const primeiroElemento = arr[0]
if(primeiroElemento.length <= 5){
  console.log("O filtro deve ser: Filtro Normal")
  // console.log(primeiroElemento.length)
}else if(primeiroElemento.length > 5 && primeiroElemento.length <= 10){
  console.log("O filtro deve ser: Filtro Específico")
  // console.log(primeiroElemento.length)
}else{
  console.log("O filtro deve ser: Filtro Duplo Específico")
  // console.log(primeiroElemento.length)
}