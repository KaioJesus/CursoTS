let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string, // como é opcional, ele é string ou undefined (caso nao seja definido)
): { firstName: string; lastName?: string } {
  // type annotations -> objeto

  return {
    firstName,
    lastName,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const square = squareOf(2);
const square2 = squareOf('a');

console.log(square, square2);
