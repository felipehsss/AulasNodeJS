const readline = require('readline-sync');
const idade = Number(readline.question('sua idade?'));

const result = (idade >= 18 ) ? 'Maior' : 'Menor';
console.log(result);

