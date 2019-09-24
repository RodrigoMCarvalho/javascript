const numeros = [2, 3, 6, 8, 9];
let novoArrayNumeros = [];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

for (let i = 0; i < numeros.length; i++) {
  novoArrayNumeros.push(numeros[i] * 2);
}

console.log(numeros);
console.log(novoArrayNumeros);

//mesmo comportmento do for
const numerosMap = numeros.map(function(n) {
  return n * 3;
});

console.log(numerosMap);

//usando arrow function
const arrayMapArrow = numeros.map(n => n * 4);
console.log(arrayMapArrow);

const nomes = ["Rodrigo", "Gustavo", "Moreira"];

console.log(nomes.map(n => n.toLowerCase()));

console.log('numeros ', numeros);
let mult = [];
for (let i = 0; i > numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    mult.push(numeros[i]);
  }
}
console.log(mult);

const numerosFiltrados = numeros.filter(n => n % 2 ===0)
console.log(numerosFiltrados);

const arrayMapFilter = numeros
    .filter( n => n % 2 === 0)
    .map(n => n * 2)

console.log(arrayMapFilter);
