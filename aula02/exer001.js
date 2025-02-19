const readline = require('readline-sync');
let idade = Number(readline.question('Digite a sua idade: \n'));




if(idade > 120 || idade < 1){
  console.log(`Essa idade não é valida`)
}else if(idade >= 18 && idade < 120){
  console.log('Você é maior de idade!')
}else{
  console.log(`Você é menor de idade!`)
}

// if(idade > 120 || idade < 1){
//   console.log(`Essa idade não é valida`)
// }else {
//   if(idade >= 18 && idade < 120){
//     console.log('Você é maior de idade!')
//   }else{
//     console.log(`Você é menor de idade!`)
//   }
// }

// if(idade < 0 && idade < 121){
//   if (idade<18){
//     console.log('Você é menor de idade!')
//   }else{
//     console.log('Você é maior de idade!!')
//   }
// }