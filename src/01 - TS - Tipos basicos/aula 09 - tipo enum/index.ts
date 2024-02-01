enum Cores {
  VERMELHO = 1, // por padrão começa por '0' o índice, mas posso definir por qual número começar
  AZUL = 50, // 1 -> vira 2
  AMARELO = 100, // 2 -> vira 3
  PRETO,
} // pode ser numérico ou de string, mas quando o enum for string, as achaves precisarão de inicializadores, pois não saberão como continuar, mas caso seja numérico, ele conseguirá seguir sem

enum Cores2 {
  rosa = 'pink',
  marrom = 'brown',
  verde = 'green',
  //   branco, // se tiver sem nada lança um erro
}

console.log(Cores);
console.log(Cores2);
console.log(Cores.VERMELHO);
