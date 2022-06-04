function checar() {
    var numero = document.querySelector("#num").value
    let valido = false
    let checados = []

    let caracteresValidos = ["(", ")", "-", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

    for (let caracter of numero) {
        if (caracteresValidos.includes(caracter)) {
            checados.push(caracter)
        }
    }

    if (checados.length === 14) {
        valido = true
    }

    if (valido == true && numero[0] == "(" && numero[3] == ")" && numero[9] == "-") {
        document.querySelector("#correto").innerHTML = "Seu número é válido"
    }
    else {
        alert("Seu número é inválido")
    }

}