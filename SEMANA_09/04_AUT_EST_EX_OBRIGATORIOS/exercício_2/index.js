function soma() {
    var input = document.querySelector("#num").value
    var soma = 0

    for (var a = 0; a < input.length; a++) {
        soma = soma + parseInt(input[a])
    }

    document.querySelector("#resultado").innerHTML = `a soma de cada casa numérica ${soma}`

}
