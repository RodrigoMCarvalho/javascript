let num = document.getElementById("num");
let form = document.getElementById("lista");
let valores = [];
let res = document.getElementById("res");

function adicionar() {
  if (inLista(num.value, valores)) {
    alert(`O valor ${num.value} já está incluído no array.`);
    num.value = "";
  } else if (!isNumero(num.value)) {
    alert("Digite um número entre 1 e 100");
  } else {
    valores.push(num.value); //adiciona no array
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado.`;
    form.appendChild(item);
    num.value = ""; //limpar após clicar no botão
  }
}

function finalizar() {
  res.innerHTML = `Os dados do vetor são: ${valores}`;
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
