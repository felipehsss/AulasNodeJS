const readline = require('readline-sync');
let peso = Number(readline.question('Qual é o seu peso?'));
let altura = Number(readline.question('Qual é a sua altura?'));
let imc = peso / (altura **2);

const result = (isNaN(peso) || isNaN(altura)) ? 'inválido' : (altura >= 2.60) ? 'Altura inválida' : (imc < 17) ? 'Situação: Muito abaixo do peso!' : (imc >= 17 && imc < 18.49) ? 'Situação: abaixo do peso!' : (imc >= 18.5 && imc <= 24.99) ? 'Situação: Peso normal!' : (imc >= 25 && imc <= 29.99) ? 'Situação: Acima do Peso!' : (imc >= 30 && imc <= 34.99) ?
'Obesidade I!' : (imc >= 35 && imc <= 39.99) ? 'Obesidade II(Severa)!' : (imc >= 40) ? 'Obesidade III (Mórbida)!';

console.log(result);
