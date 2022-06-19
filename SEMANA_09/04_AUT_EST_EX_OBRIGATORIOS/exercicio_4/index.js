function resultado() {
    let num = document.querySelector("#num").value
    let soma = 0
    let num_antes = 0
    let num_prox = 1

    for (let c = 0; c < num; c++) {
        soma = num_antes + num_prox
        num_antes = num_prox
        num_prox = soma
        console.log(c)
        document.querySelector("#resposta").innerHTML = `A sequencia de fibonacci de ${num} é ${num_antes}`
    }



}