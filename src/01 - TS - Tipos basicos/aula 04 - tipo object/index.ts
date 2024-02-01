const objectA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string; // opcional
  [key: string]: unknown; // index signature, quando não sei qual a chave que vai ser criada
} = {
  chaveA: 'a',
  chaveB: 'b',
};

// objectA.chaveA = 'c'; // apenas leitura, não pode ser modificado
objectA.chaveC = 'B'; // caso não existisse chaveC tipada, não seria possível adicionar essa chave, ts não permite
objectA.chaveB = 'A';
objectA.chaveD = 'D';
