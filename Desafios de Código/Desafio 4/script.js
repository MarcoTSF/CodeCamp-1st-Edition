//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let plastico = parseInt(2002);
let diasNecessarios = 0;

//TODO: Print no console a quantidade de dias que levará para que o plástico chegue
//a 1kg ou menos

//Enquanto a quantidade de plastico for diferente de 1 (ou maior), devemos dividir por dois.
while(plastico > 1){
  //Encontra a nova quantidade de Plastico
  novaQtdePlastico = plastico / 2
  novaQtdePlastico = parseFloat(novaQtdePlastico).toFixed(2)
  //Atualiza a qtde de plastico existente.
  plastico = novaQtdePlastico
  console.log(plastico)
  diasNecessarios++
}
console.log(plastico)
console.log(`Serão necessários ${diasNecessarios} dias`)