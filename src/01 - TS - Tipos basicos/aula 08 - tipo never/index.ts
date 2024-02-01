// tipo never -> nunca -> nunca vai retornar nada
// usado com laços infinitos ou quando é preciso lançar erros

function criaErro(): never {
  throw new Error('Erro qualquer'); //geralmente never é usado com erro
}

criaErro();
