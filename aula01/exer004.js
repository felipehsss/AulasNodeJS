let precoInical = 100;
let desconto = (precoInical/100) * 10;

precoFinal = (precoInical - desconto);

console.log(`O desconto de 10% sobre o produto com preço inicial de ${precoInical} custará ${precoFinal}`);