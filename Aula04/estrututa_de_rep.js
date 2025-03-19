// 'estr.txt'

const readline = require('readline-sync');

// const num = Number(readline.question('Digite um numero: '));


// for(let i=0 ; i <= 10; i++) {
//   console.log(`${num} x ${i} = ${num * i}`)
// }

// for(let i= -1; i <=11; i += 3){
//   console.log(i)
// }


// let i = 0;
// while (i <= 10){
//   console.log(`${num} x ${i} = ${num*i}`);
//   i++;
// }

let num;
for ( ; ; ) {
   num = Number(readline.question('Numero: '))
  if (num >= 0) {
    break
  }
}

console.log(num ** 2);