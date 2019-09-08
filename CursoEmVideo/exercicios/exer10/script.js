let num = document.getElementById("num");
let lista = document.getElementById("lista");
let valores = [];
let res = document.getElementById("res");

function adicionar() {
  res.innerHTML = ""; //limpar a resposta caso adicione mais números

  if (inLista(num.value, valores)) {
    alert(`O valor ${num.value} já está incluído no array.`);
    num.value = "";

  } else if (!isNumero(num.value)) {
    alert("Digite um número entre 1 e 100");

  } else {
    valores.push(num.value); //adiciona no array
    let item = document.createElement("option");  //criar uma tag optino em modelo.html
    item.text = `Valor ${num.value} adicionado.`;
    lista.appendChild(item);

    num.value = ""; //limpar após clicar no botão
    num.focus();
  }
}

function finalizar() {
  if (valores.length != 0) {
    const reducer = (valorAculumador, valorArray) =>
      parseInt(valorAculumador) + parseInt(valorArray);

    const soma = valores.reduce(reducer);
    const media = parseFloat((soma / valores.length).toFixed(2));
    const maior = Math.max.apply(null, valores);
    const menor = Math.min.apply(null, valores);

    res.innerHTML = `Os dados do vetor são: ${valores} <br>`;
    res.innerHTML = `O total de valores do vetor é: ${valores.length} <br>`;
    res.innerHTML += `A soma dos valores é : ${soma}<br>`;
    res.innerHTML += `A média dos valores do vetor é: ${media}<br>`;
    res.innerHTML += `O maior valor do vetor é: ${maior} <br>`;
    res.innerHTML += `O menor valor do vetor é: ${menor}<br>`;
  } else {
    alert("Digite um valor antes de finalizar.");
  }
}

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  let cont = 0;
  for (let index in l) {
    if (n === l[index]) {
      cont++;
    }
  }
  if (cont > 0) {
    return true;
  } else {
    return false;
  }
}
