//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// let lista1 = gets().split(', ');
// let lista2 = gets().split(', ');
// let lista3 = gets().split(', ')

let arr = ["Cl2", "NH3", "CO2", "O2", "N3", "CO2", "CO"]

let qualFiltro = false;
let qualMolecula ;

//TODO: Print no console qual filtro deve ser utilizado de acordo com as moléculas prejudiciais
//avaliadas no teste.

let index = arr.indexOf("CO")
console.log(index)
console.log(arr.indexOf("CO"))
  if(index !== -1){
    console.log("Filtro Específico para a Molécula CO")
  }else{
    console.log("Filtro Simples")
  }

