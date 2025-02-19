const readline = require('readline-sync');

let peso = (readline.question('qual e o seu peso?'))
let altura = (readline.question('qual e a sua altura?'))

let imc = peso / (altura**2);


if(altura >= 2.60 ){
  return console.log(`Altura invalida`);
}else{
if(imc < 17){
  console.log(`Situação: Muito abaixo do peso!`);
}else if(imc >= 17 && imc < 18.49){
  console.log(`Situação: abaixo do peso!`);
}else if(imc >= 18.5 && imc <= 24.99){
console.log(`Situação: Peso normal!`);
}else if(imc >= 25 && imc <= 29.99){
console.log(`Situação: Acima do Peso!`);
}else if(imc >= 30 && imc <= 34.99){
console.log(`Obesidade I!`);
}else if(imc >= 35 && imc <= 39.99){
console.log(`Obesidade II(Severa)!`);
}else if(imc >= 40){
console.log(`Obesidade III (Mórbida)!`);
}
 }