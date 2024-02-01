export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private _idade: number,
    protected _cpf: string,
  ) {}

  // get e setter se comportam como atributos da classe, então se você quer pegar ou setar o valor do atributo declado no construtor, por definição, é colocado um '_' antes do atributo, exemplo é o cpf e a idade definidos acima. Isso acontece para não gerar uma recursão, quando a função/atributo chama ela dentro dela.

  get idade(): number {
    return this._idade;
  }

  set cpf(cpf: string) {
    // altera o valor
    console.log('set');
    this._cpf = cpf;
  }
  get cpf(): string {
    console.log('get');
    return this._cpf.replace(/\D/g, '');
  }

  get NomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  }
}
const pessoa = new Pessoa('Kaio', 'Jesus', 24, '161.944.027-09');
console.log(pessoa.cpf);
pessoa.cpf = '150.450.877-70';
console.log(pessoa.cpf);
console.log(pessoa.NomeCompleto);
