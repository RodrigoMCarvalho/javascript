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

console.log("numeros ", numeros);
let mult = [];
for (let i = 0; i > numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    mult.push(numeros[i]);
  }
}
console.log(mult);

//--------------------
const numerosFiltrados = numeros.filter(n => n % 2 === 0);
console.log('Numeros filtrados: ' + numerosFiltrados);

const arrayMapFilter = numeros.filter(n => n % 2 === 0).map(n => n * 2);
console.log(arrayMapFilter);

//--------------------
let soma = 0;
for (let i = 0; i < arrayMapFilter.length; i++) {
  soma += arrayMapFilter[i];
}
console.log("A soma é " + soma);

let soma1 = 0;
arrayMapFilter.forEach(s => (soma1 += s));
console.log("A soma é " + soma1);
//--------------------

const reducer = (valorAcumulador, valorArray) => valorAcumulador + valorArray;
let somaReducer = arrayMapFilter.reduce(reducer);

console.log("Soma reduce: " + somaReducer);

const pessoas = [
  {
    nome: "Rodrigo",
    idade: 35
  },
  {
    nome: "Gustavo",
    idade: 5
  },
  {
    nome: "Raquel",
    idade: 33
  },
  {
    nome: "Lucas",
    idade: 15
  },
  {
    nome: "Heloisa",
    idade: 52
  }
];

const pessoasAgrupadas = pessoas.reduce(
  function(valorAcumulador, valorArray) {
    const maiorOuMenor = valorArray.idade <= 18 ? "menores" : "maiores";
    valorAcumulador[maiorOuMenor].push(valorArray);

    return valorAcumulador;
  },
  { menores: [], maiores: [] }
);
var pessoasAgrupadasJson = JSON.stringify(pessoasAgrupadas)
console.log('Pessoas agrupadas: ' + pessoasAgrupadasJson)