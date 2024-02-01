// npx tsc 'nome do arquivo' -> gera um arquivo em js para compilação, node não entende typescript
// script mode -> um arquivo js enorme, detecta coisas no mesmo com mesmo nome em arquivos diferentes e dirá que é um erro
// module mode -> para usar esse modo, é preciso exportar as coisas do arquivo;

// npm i ts-node -D -> para usar o code runner e conseguir compilar o ts no terminal
// npm i typescript -D -> instalar o ts

function a(name: string) {
  return `Olá ${name}`;
}

console.log(a('Kaio'));
