function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

let valores = [6, 9, 8];
let num = 9

console.log(inLista(num, valores));
