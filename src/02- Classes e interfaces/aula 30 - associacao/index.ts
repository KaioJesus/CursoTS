export class Escritor {
  private _ferramenta: Ferramenta | null = null; // existe ou nao
  constructor(private _nome: string) {}

  get nome() {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Não posso escrever sem ferramenta');
      return;
    }

    this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever() {
    console.log(`${this.nome} está escrevendo ...`);
  }
}
export class MaquinaDeEscrever extends Ferramenta {
  escrever() {
    console.log(`${this.nome} está escrevendo ...`);
  }
}

const escritor = new Escritor('Kaio');
const caneta = new Caneta('Bic');
const maquina = new Caneta('Teclado');

console.log(escritor.nome);
console.log(caneta.nome);
console.log(maquina.nome);

escritor.ferramenta;
escritor.escrever();
escritor.ferramenta = caneta;
escritor.escrever();
escritor.ferramenta = maquina;
escritor.escrever();
