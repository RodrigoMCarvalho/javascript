var idade = 66;
if (idade < 16) {
  console.log("Voto não obrigatório");
} else if ((idade >= 16 && idade < 18) || idade > 65) {
  console.log("Voto opcional");
} else {
  console.log("Voto obrigatório");
}
