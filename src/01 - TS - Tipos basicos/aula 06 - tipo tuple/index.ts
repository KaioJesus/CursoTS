/* eslint-disable @typescript-eslint/no-unused-vars */
const dadosCliente: readonly [number, string] = [1, 'Kaio'];
const dadosCliente2: [number, string, string?] = [1, 'Kaio', 'Jesus']; //operador elvis(?), torna o que você definir como opcional, nesse caso a string 'jesus' pode ser ou não posta

const dadosCliente3: [number, string, ...string[]] = [1, 'Kaio']; // definindo o restante dos índices como string, valor indeterminado nesse caso

// dadosCliente[0] = 1; //eu posso mudar os índices do array de acordo com os tipos definidos para cada índice, nesse caso somente números

// dadosCliente.pop(); // deleta o último item do array, mas o array está com o valor definido para 2 itens no array, o que podemos fazer é pôr o array como readonly (apenas leitura) que então não poderá ser modificado
console.log(dadosCliente);
console.log(dadosCliente2);
