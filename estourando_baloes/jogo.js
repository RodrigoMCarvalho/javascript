function iniciaJogo() {
    var url = window.location.search;
    var nivel_jogo = url.replace("?", "");
    var tempo_segundos = null;

    if (nivel_jogo == 1) { //1 - Fácil 120 segundos
        tempo_segundos = 120;
    }
    if (nivel_jogo == 2) { // 2 - Normal 60 segundos
        tempo_segundos = 60;
    }
    if (nivel_jogo == 3) { //3 - Difícil 30 segundos
        tempo_segundos = 30;
    }
    //inserindo segundos no span
    document.getElementById('cronometro').innerHTML = tempo_segundos;

    var qtd_baloes = 30;
    cria_baloes(qtd_baloes);

    document.getElementById('baloes_inteiros').innerHTML = qtd_baloes;
    document.getElementById('baloes_estourados').innerHTML = 0;
}
function cria_baloes(qtd_baloes){
    for (var i = 0; i < qtd_baloes; i++) {

        var baloes = document.createElement("img");
        baloes.src = 'imagens/balao_azul_pequeno.png';
        baloes.style.margin = '10px';

        document.getElementById('cenario').appendChild(baloes);
    }
}