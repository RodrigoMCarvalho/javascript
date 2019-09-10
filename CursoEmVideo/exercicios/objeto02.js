var usuarios = [
    {
        nome: 'Rodrigo',
        idade: 35
    },
    {
        nome: 'Raquel',
        idade: 33
    },
    {
        nome: 'Gustavo',
        idade: 5
    }
];

//console.log(usuarios[1])

var usuario = {
    posicao: 0,
    get atual() {
        return usuarios[this.posicao]
    },
    set atual(posicao) {
        this.posicao = posicao;
    },
    proximo() {
        ++this.posicao;
    },
    anterior() {
        --this.posicao;
    }
}

console.log(usuario.atual)
usuario.proximo();

console.log(usuario.atual)
usuario.proximo();

console.log(usuario.atual)

usuario.anterior();
console.log(usuario.atual)

usuario.atual = 0;
console.log(usuario.atual)


var novoUsuario = {
    nome: 'Ailton',
    idade: 71,
    pais: 'Brasil'
}

//var idade = novoUsuario.idade;
var { idade } = novoUsuario;


console.log(idade)