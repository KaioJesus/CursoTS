/* eslint-disable @typescript-eslint/no-explicit-any */
// unkown é o tipo any mais seguro

let x: unknown;

x = 'kaio';
x = 10;
x = 'jesus';
x = 900;
x = '900';

const y = 900;
// quando for unknown ele não vai deixaar fazer a conta, se for any vai deixar porque no caso faria a concatenação

if (typeof x === 'number') console.log(x + y); // nesse caso só vai entrar aqui se o x for numero
