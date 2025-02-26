const readline = require('readline-sync');

let peso = Number(readline.question('Qual é o seu peso?'));
let altura = Number(readline.question('Qual é a sua altura?'));

let imc = peso / (altura **2);

if(isNaN(peso) || isNaN(altura)){
  console.log('Inválido')
}else{
  if(altura >= 2.60 ){
    console.log(`Altura invalida`);
  }
  else{
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
}