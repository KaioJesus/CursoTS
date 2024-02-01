// Classes abstract não é instanciada, só os filhos concretos que são

// a classe foi criada somente para ser herdada, para ser 'extendida', então por isso ela é abstrata, então ela não pode ser instaciada diretamente
export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forçaAtaque: number): void {
    this.vida -= forçaAtaque;
    console.log(`${this.nome} agora tem ${this.vida} de vida ...`);
  }

  // método abstrato não tem corpo, são só criados nos filhos, então todos os filhos precisão ter esse método
  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';
  bordao() {
    console.log(this.emoji + 'Guerreira ao ataque!!!!!');
  }
}
export class monstro extends Personagem {
  protected emoji = '\u{1F9DF}';
  bordao() {
    console.log(this.emoji + 'Monstro ao ataque!!!!!');
  }
}

const guerreira = new Guerreira('Warrior', 250, 2000);
const monster = new monstro('monster', 100, 4000);

guerreira.atacar(monster);
monster.atacar(guerreira);
guerreira.atacar(monster);
monster.atacar(guerreira);
guerreira.atacar(monster);
monster.atacar(guerreira);
guerreira.atacar(monster);
monster.atacar(guerreira);
guerreira.atacar(monster);
monster.atacar(guerreira);
guerreira.atacar(monster);
monster.atacar(guerreira);
guerreira.atacar(monster);
