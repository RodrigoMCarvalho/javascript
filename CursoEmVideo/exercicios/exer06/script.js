function contar() {
  var inicio = document.getElementById("txtini");
  var fim = document.getElementById("txtfim");
  var passo = document.getElementById("txtpasso");
  var res = document.getElementById("res");

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    alert("Dados faltando.");
  } else {
    res.innerHTML = `Contando.. </br>`;
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    if ( p <= 0) {
      alert('Passo inválido. Considerando passo = 1')
      p = 1
    }

    if (i < f ) {
      for (let c = i; c <= f; c += p) { //c = c + p / 1 = 1 + 2
        res.innerHTML += `${c} `;
      }
    } else {
      for (let c = i; c >= f; c -= p) { //c = c - p / 20 = 20 - 2
        res.innerHTML += `${c} `;
      }
    }
  }
}
