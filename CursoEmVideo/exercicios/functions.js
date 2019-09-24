//arrow function

var soma = (a, b) => {
  return a + b;
};

var soma2 = (a, b) => a + b;

console.log(soma(10, 6));

console.log(soma2(12, 5));

var retornoUsuario = () => ({
  nome: "Rodrigo",
  idade: 35
});

console.log(retornoUsuario());

var retornaCidade = cidade => ({
  nome: "Gustavo",
  idade: 5,
  cidade
});

console.log(retornaCidade('Rio de Janeiro'))