function sorteio(){
    let numini = document.getElementById("numInicial")
    let numfim = document.getElementById("numFinal")
    let numInicial = Number(numini.value)
    let numFinal = Number(numfim.value)
    let aleatorio = Math.round(Math.random() *(numFinal-numInicial) + numInicial)
    console.log (numini, numfim, aleatorio)
    console.log (typeof(aleatorio))
    let resposta = document.getElementById("resposta")
    resposta.innerHTML = `O número é ${aleatorio}`

    if (numInicial>= numFinal){
        alert("Digite um número inicial menor que o final")
        resposta.innerHTML =""
    }
}