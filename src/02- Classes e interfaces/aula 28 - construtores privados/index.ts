// Padrão de projeto singleton - Gof |

export class Database {
  // conexao com a base de dados

  private static database: Database;

  private constructor(
    // só é acessado por dentro da classe
    private host: string,
    private user: string,
    private password: string,
  ) {}

  //    Factory method
  static getDataBase(host: string, user: string, password: string): Database {
    // usado para acessar fora da classe
    if (Database.database) {
      console.log('Retornando instância já criada!');
      return Database.database;
    }
    console.log('Criando nova instância');
    Database.database = new Database(host, user, password);
    return Database.database;
  }

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }
}

const db1 = Database.getDataBase('localhost', 'root', '456789');
db1.connect();

const db2 = Database.getDataBase('localhost', 'root', '456789');
db2.connect();

const db3 = Database.getDataBase('localhost', 'root', '456789');
db3.connect();

const db4 = Database.getDataBase('localhost', 'root', '456789');
db4.connect();

console.log(db1 === db2);
