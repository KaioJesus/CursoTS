// module mode, para caso precise usar o mesmo nome e não ter conflito (export)
export function somaArgs(...args: Array<number>): number {
  // modo generics
  return args.reduce((acc, valor) => (acc += valor), 0);
}

function concatenaStrings(...args: string[]): string {
  // outro modo de tipar array
  return args.reduce((acc, valor) => (acc += valor));
}
function toUpperCase(...args: string[]): string[] {
  //retorna um array de string
  return args.map((value) => value.toUpperCase());
}

export const result = somaArgs(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result);

const concatenacao = concatenaStrings('a', 'b', 'c');
console.log(concatenacao);

const maiusculo = toUpperCase('a', 'b', 'c');
console.log(maiusculo);
