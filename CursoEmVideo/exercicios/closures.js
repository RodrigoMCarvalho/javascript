function imprimeNomeCompleto(nome) {
  return function() {
    console.log(nome, "Moreira");
  };
}

function inicializa() {
  let nome = "Rodrigo";
  //console.log('primeiro');
  setTimeout(imprimeNomeCompleto(nome), 1000);
}

inicializa();
