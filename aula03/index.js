const readline = require('readline-sync');

const idade = Number(readline.question('Sua idade? '));


if(isNaN(idade)){
  console.log('Idade inválido!')
}else{
  if(idade >= 18){
    console.log('Maior de idade');
  }else{
    console.log('Menor de idade');
  }
}
