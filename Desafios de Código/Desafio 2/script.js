//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let id = parseInt(gets());

//TODO: Print no console para qual Barraca o CleanCoder deve ir

//Usnando operador % -> Indica o resto de uma divisao.
if (id % 2 != 0) {
  //impar
  print("Barraca da Esquerda")
}
else{
    //par
  print("Barraca da Direita")
}