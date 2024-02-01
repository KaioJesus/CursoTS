// para ter herança de uma classe usamos 'extends'
// só podemos herdar de uma classe
// só de interface que podemos herdar mais de uma

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
export class Aluno extends Pessoa {
  // mas se desejar, podemos sobrescrever um método aqui nessa clase
  getNomeCompleto(): string {
    return `Aluno: ${this.nome} ${this.sobrenome}`; //método sobrescrito
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Kaio', 'Jesus', 24, '16194402709');
console.log(pessoa);

const aluno = new Aluno('Kaio', 'Jesus', 24, '16194402709');
console.log(aluno);

const cliente = new Cliente('Kaio', 'Jesus', 24, '16194402709');
console.log(cliente);

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
