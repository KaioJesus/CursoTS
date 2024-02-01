// Tipo void -> quando a função nao retorna nada
function semRetorno(...args: string[]): void {
  //rest operator para ser um array
  console.log(args.join(' '));
}

semRetorno('Kaio', 'Jesus');

const pessoa = {
  nome: 'Kaio',
  sobrenome: 'Jesus',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

pessoa.exibirNome();

export { pessoa };
