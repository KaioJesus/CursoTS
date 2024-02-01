/* eslint-disable @typescript-eslint/no-unused-vars */
// Tipos básicos (aqui ocorro inferência de tipos)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const nome: string = 'Kaio'; // qualquer string
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const idade: number = 30; //números (int, float, hexadecimal, octal)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const adulto: boolean = true; // true ou false
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const simbolo: symbol = Symbol('qualquer-symbol'); //symbol

// Array
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const array: Array<number> = [1, 2, 3];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const arrayDois: number[] = [1, 2, 3];

//Objetos

type Pessoa = {
  nome: string;
  idade: number;
  adulto?: boolean;
};

// tipando o objeto com o tipo pessoa que é um tipo objeto também
const pessoa: Pessoa = {
  //adulto é opcional, por ter o operador elvis (?)
  nome: 'Kaio',
  idade: 23,
  adulto: true,
};

function soma(x: number, y: number): number {
  return x + y;
}

// outra forma;
const soma2: (x: number, y: number) => number = (x, y) => x + y;

const result: number = soma(3, 20);
console.log(pessoa.nome);
console.log(result);
