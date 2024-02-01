export class EmpresaUm {
  public readonly nome: string;
  // apenas leitura fora da classe para não ser alterado
  private readonly colaboradores: Colaborador[] = [];
  // classes também funcionam como tipos
  // recebe um array vazio do tipo colaborador (classe)
  protected readonly cnpj: string;
  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }
  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostraColaboradores() {
    this.colaboradores.forEach((item) => console.log(item));
  }
}

// mesma coisa do que está escrito acima
export class Empresa {
  constructor(
    public readonly nome: string,
    protected readonly cnpj: string,
  ) {}
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new EmpresaUm('Udemy', '11.111.111/0001-11');
console.log(empresa1);
console.log(empresa1.nome);

// colaborador é um atributo private, então é preciso criar um método publico que adicione os colaboradores na classe empresa
const colaborador1 = new Colaborador('Kaio', 'Jesus');
const colaborador2 = new Colaborador('Caroline', 'Costa');
const colaborador3 = new Colaborador('Kaua', 'Jesus');

// método que adiciona os colaboradores
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

console.log(empresa1);
empresa1.mostraColaboradores();
