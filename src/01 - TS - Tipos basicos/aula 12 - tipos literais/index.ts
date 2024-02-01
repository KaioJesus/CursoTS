// Tipos literais
// valores comos tipos
// tipos literais normalmente são const por serem imutaveis
// se por algum motivo não for possível usar const, será usado o type assertion 'as const'

export let x = 10; // eslint-disable-line
x = 0b0101; // posso mudar essa variável para qualquer numero
// x = 'luiz'; // mas não posso para trocar uma string

const pessoa = {
  nome: 'Kaio' as const, // assertion
  sobrenome: 'Jesus',
};

console.log(pessoa);

function chooseColor(cor: 'vermelho' | 'Amarelo' | 'Azul') {
  // tipos liteiras, verifica se essa string recebe um desses valores
  return cor;
}

// console.log(chooseColor('verde')); // diz que verde não foi declarado nos tipos do parâmetro da função
console.log(chooseColor('Amarelo')); // diz que verde não foi declarado nos tipos do parâmetro da função
