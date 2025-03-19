const readline = require('readline-sync');

// const peso = readline.question('Digite seu peso: ');
const peso = Number(readline.question('Digite seu peso: '));
const altura = Number(readline.question('Digite  sua altura: '))

const imc = (!isNaN(peso) && !isNaN(altura) && altura > 3) ? peso / altura ** 2 : 'Peso ou altura inválida';



console.log(`${isNaN(imc) ? imc : imc.toFixed(1) }`);


const estado = (imc < 17) ? 'Muito abaixo do peso' : (imc >= 17 && imc < 18.5) ? 'Abaixo do peso' : (imc >= 18.5 && imc < 25) ? 'Peso normal' : (imc >= 25 && imc < 30) ? 'Acima do peso' : (imc >= 30 && imc < 35) ? 'Obesidade I' : (imc >= 35 && imc < 40) ? 'Obesidade II (severa)' : (imc>=40) ? 'Obesidade III(Mórbida)' : 'Indefinido';


console.log('Estado: ', estado);
