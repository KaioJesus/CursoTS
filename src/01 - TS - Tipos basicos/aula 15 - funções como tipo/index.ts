type MapStringsCallback = (item: string) => string; //recebe um parametro com o tipo string e retorna string

export function mapStrings(
  array: string[],
  callbackfn: MapStringsCallback,
): string[] {
  const newArray: string[] = [];
  for (let index = 0; index < array.length; index++) {
    const item = array[index];
    newArray.push(callbackfn(item));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());
console.log(abcMapped);
