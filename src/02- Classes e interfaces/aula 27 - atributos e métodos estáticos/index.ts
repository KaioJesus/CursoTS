// Método estático, é um método que pode ser acessado sem precisar instanciar a classe
// Você não tem acesso ao método estático pela instância classe, mas sim pela Classe

export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}
  static falaOi(): void {
    console.log('Oi!');
  }

  metodoNormal() {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    // cria uma instância da propria classe
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa = new Pessoa('Kaio', 'Jesus', 24, '161.944.027-09');
const pessoa2 = Pessoa.criaPessoa('Caroline', 'Costa');
pessoa.cpf = '150.450.877-70';
console.log(Pessoa.falaOi());
console.log(pessoa);
console.log(pessoa2);
pessoa.metodoNormal(); // acessando pelo método da instância da classe os atributos estáticos
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao); // acessando pela classe os atributos estáticos
