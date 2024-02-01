// uma variável, um retorno por ter mais de um tipo
// let as: number | string; //number ou string operador pipe(|)

// as = 10;
// console.log(as);

function addOrConcat(x: number | string, y: number | string): number | string {
  if (typeof x === 'number' && typeof y === 'number') return x + y;

  return `${x}${y}`;
}

console.log(addOrConcat('5', 2));
