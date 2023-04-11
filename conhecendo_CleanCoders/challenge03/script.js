//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let amostra = [2, 10, 15]

//TODO: Print no console, para cada índice da lista, os parâmetros
//se a amostra está bom, aceitável ou inaceitável
//Para cada item da lista amostra (Array)
for(var posicao = 0; posicao < amostra.length; posicao++){
  //Amostra corresponde a 100g (todas)
  //Pega o valor a comparar
  amostraComparar = amostra.at(posicao)
  
  if(amostraComparar >= 75){
    console.log("Descartar da lista")
  }else if(amostraComparar < 75 && amostraComparar >= 50){
    console.log("Manter sob observação")
  }else{
    console.log("Isolar e iniciar protocolo de cuidados")
  }
}



