// método public é quando é acessível dentro e fora da classe e até nos sub classes (heranças), não é necessário por a palavra public para ser um método public

// Método private só é acessível dentro da classe em que for criada, bom para encapsulamento
// Método protected pode ser acessada dentro da classe que foi criada e nas classes filhas

export class EmpresaUm {
  public readonly nome: string;
  // apenas leitura fora da classe para não ser alterado

  protected readonly colaboradores: Colaborador[] = [];
  // classes também funcionam como tipos
  // recebe um array vazio do tipo colaborador (classe)

  protected readonly cnpj: string;
  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }
  public adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  //   não é necessário por public para ser public
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
export class Udemy extends EmpresaUm {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Udemy();

// colaborador é um atributo private, então é preciso criar um método publico que adicione os colaboradores na classe empresa
const colaborador1 = new Colaborador('Kaio', 'Jesus');
const colaborador2 = new Colaborador('Caroline', 'Costa');
const colaborador3 = new Colaborador('Kaua', 'Jesus');

// método que adiciona os colaboradores
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

empresa1.mostraColaboradores();
const colaboradorRemovido = empresa1.popColaborador();
console.log('Removido: ', colaboradorRemovido);
empresa1.popColaborador();
console.log(empresa1);
