// &&

type temNome = { nome: string };
type temSobrenome = { sobrenome: string };
type temIdade = { idade: number };

type Person = temNome | temSobrenome | temIdade;
type Person2 = temNome & temSobrenome & temIdade; // nesse caso precisa ter os tres -> intersection type
const person: Person = {
  // como o tipo é ou nome ou sobrenome ou idade, o objeto pode ter só um dos três
  nome: 'Kaio',
};

const person2: Person2 = {
  nome: 'Kaio',
  sobrenome: 'Jesus',
  idade: 23,
};

console.log(person, person2);
