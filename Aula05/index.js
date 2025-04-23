const readline = require('readline-sync');

let num = Number(readline.question('Digite um numero: '));

const result = (!isNaN(num)) ? (num % 2 === 0) ? 'Par' : 'Impar' : 'Inválido';
console.log(`${num} é ${result}`);
let continuar = readline.question('Deseja continuar? (s/n)');

while (continuar === 's') {

  num = Number(readline.question('Digite um numero: '));
  
  const result = (!isNaN(num)) ? (num % 2 === 0) ? 'Par' : 'Impar' : 'Inválido';
  console.log(`${num} é ${result}`);
  continuar = readline.question('Deseja continuar? (s/n)');
  
  
} console.log(`fim`);



