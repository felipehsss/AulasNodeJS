const readline = require('readline-sync');

const num = Number(readline.question('Digite um numero?'));


const result = (!isNaN(num)) ? (num % 2 === 0) ? 'Par' : 'Impar' : 'Inválido';

console.log(`${num} é ${result}`);
