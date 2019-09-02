function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fAno = document.getElementById("txtAno");
  var res = document.getElementById("res");

  if (fAno.value.length == 0 || Number(fAno.value) > ano) {
    alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fSex = document.getElementsByName("radSexo");
    var idade = ano - Number(fAno.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto"); //igual ao HTML <img id='foto'>

    if (fSex[0].checked) {
      genero = "Homem";

      if (idade >= 0 && idade <= 10) {
        img.setAttribute('src', 'img/menino.png')
      } else if (idade < 21) {
        img.setAttribute('src', 'img/jovem-homem.png')
      } else if (idade < 50) {
        img.setAttribute('src', 'img/homem-adulto.png')
      } else {
        img.setAttribute('src', 'img/homem-idoso.png')
      }
    } else {
      genero = "Mulher";

      if (idade >= 0 && idade <= 10) {
        img.setAttribute('src', 'img/menina.png')
      } else if (idade < 21) {
        img.setAttribute('src', 'img/jovem-mulher.png')
      } else if (idade < 50) {
        img.setAttribute('src', 'img/mulher-adulta.png')
      } else {
        img.setAttribute('src', 'img/mulher-idosa.png')
      }
    }

    res.style.textAlign = "center"; //centraliza o texto
    res.innerHTML = `Detectemos ${genero} com ${idade} anos.`;
    res.appendChild(img) //adiciona um elemento no HTML
  }
}
