function tabuada() {
    let num = document.getElementById('num')
    let tab = document.getElementById('tab')

    if(num.value.length == 0) {
        alert('Digite um número')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''  //limpar ao mandar gerar a tabuada na 2x

        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`

            tab.appendChild(item)
        }
    }
    

}
