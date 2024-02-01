// Um apelido para os tipos -> define tipos que possam ser repetidos por mais de uma variavel
// usado type
// usado para o código ficar mais limpo

type Idade = number; // definindo idade como um tipo number
type CorRGB = 'vemelho' | 'verde' | 'azul'; // definindo como um tipo literal e type union
type CorCMYK = 'ciano' | 'magenta' | 'amarelo' | 'preto';
type CorPreferida = CorRGB | CorCMYK; //union

type Pessoa = {
  // definindo como tipo objeto
  nome: string;
  idade: Idade; // usando o tipo idade definido como number anteriormente
  profissao: string;
  salario: number;
  corPreferida?: CorPreferida; // opcional
};

export const pessoa: Pessoa = {
  nome: 'Kaio',
  idade: 23,
  profissao: 'desenvolvedor',
  salario: 14000,
  //   corPreferida: 'preto',
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'preto'));
