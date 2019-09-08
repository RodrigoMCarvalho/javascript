let filho = {
    nome: 'Gustavo', 
    sexo: 'M', 
    idade: 5,
    peso: 20.8,
    engordar(p=0){
        console.log('Engordou.');
        this.peso += p;
    }
}

console.log(typeof filho)
console.log(`Meu filho ${filho.nome} pesa ${filho.peso}Kg.`)

filho.engordar(3)
console.log(`Meu filho ${filho.nome} agora pesa ${filho.peso}Kg.`)