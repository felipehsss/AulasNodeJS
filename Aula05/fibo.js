const readline = require('readline-sync');

const qtde = Number(readline.question('Quantidade de numeros para série de Fibonacci'))

let n1 = 1, n2 = 1, n3 = 0;

if (qtde === 1) {
  console.log(n1)
} else if (qtde === 2) {
  console.log(n1, '\n', n2);
} else if (qtde > 2) {
  console.log(n1, '\n', n2)
  for (let i = 2; i < qtde; i++) {
    n3 = n1 + n2;
    console.log(n3);
    console.log(`** ${(n2/n1).toFixed(3)} **`);
    n1 = n2;
    n2 = n3;
  }
}