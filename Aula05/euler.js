// const readline = require('readline-sync');
// const x = Number(readline.question('Digite um nº'));




// const e = (1 + 1/x)**x;

// console.log(`O número de Euler para ${x} é  ${e}`);
const readline = require('readline-sync');
const x = Number(readline.question('Digite um nº'));
const qtde = Number(readline.question('Qtde de repetições? '));
 const e = (1 + 1 / x)**x;

for (let i=1;i<=qtde;i++){
  console.log(i,'. ',e)
}

