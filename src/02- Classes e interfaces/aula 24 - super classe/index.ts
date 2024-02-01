// para ter herança de uma classe usamos 'extends'
// só podemos herdar de uma classe
// só de interface que podemos herdar mais de uma

// super classe (classe mae ou pai)
// usamos a palavra super para ter acesso a classe super(mae) através das subclasses

export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  }
}

// tudo que tem em Pessoa, tem nessas classes herdadas
// sub classe (classe filha)
export class Aluno extends Pessoa {
  // mas se desejar, podemos sobrescrever um método aqui nessa clase

  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string, // nesse caso é como se fizesse this.sala dentro do construtor
  ) {
    //   recebendo os valores no construtor de aluno que vai mandar para a super classe, somente o public sala é do aluno, é preciso fazer isso caso o construtor da classe filha receba outros parâmetros/argumentos. O typescript reclama se tiverem dois construtor, então por isso precisamos chamar o método super();
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    // método sobrescrito
    console.log('fazendo algo antes');
    return super.getNomeCompleto(); // chamando o método da superclasse
  }
}

// sub classe (classe filha)
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Kaio', 'Jesus', 24, '16194402709');

const aluno = new Aluno('Kaio', 'Jesus', 24, '16194402709', '901');
console.log(aluno);
const cliente = new Cliente('Kaio', 'Jesus', 24, '16194402709');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
