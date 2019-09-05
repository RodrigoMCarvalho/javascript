let valores = [2,5,9]
console.log(valores.length)

console.log(valores.indexOf(9))

valores.push(7)
valores.sort()

for(let cont in valores) {
    console.log(`Indice ${cont} igual ${valores[cont]}`)
}

