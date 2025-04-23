const readline = require('readline-sync');

let usuario = 'felipe@gmail.com';
let senha = 1234;



for (let t = 0; t < 3; t++) {

  let user = readline.question('Usuário: ');
  let password = readline.question('Senha: ');

  (user === usuario && password === senha) ? console.log('login efetuado com sucesso!') : console.log('usuario ou senha incorreto');

  (t === 3) ? console.log('o numero de tentativas acabou!') : '';

}