// Quando uma classe precisa de outra para 'funcionar'

// Ex: Um carrinho de compras pode não ter nenhum produto, mas pode ter vários produtos para compra ser feita, para seus métodos funcionarem

// Carrinho de compras agrega produtos

export class CarrinhoCompras {
  private readonly produtos: Produto[] = [];

  //   rest operator '...' -> um ou mais produtos
  inserirProduto(...produtos: Produto[]) {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((sum, produto) => sum + produto.preco, 0);
  }
}

export class Produto {
  constructor(
    public nome: string,
    public preco: number,
  ) {}

  //   get nome(): string {
  //     return this._nome;
  //   }
}

const produtoUm = new Produto('Camiseta', 49.9);
const produto2 = new Produto('Casaco', 99.9);
const produto3 = new Produto('Calça', 129.9);
const produto4 = new Produto('tenis', 299.9);
const carrinho = new CarrinhoCompras();

// console.log(produtoUm);
carrinho.inserirProduto(produtoUm, produto2, produto3, produto4);
console.log(carrinho);
console.log(carrinho.valorTotal());
