function somar() {
    var a = parseInt(document.querySelector("#valor").value)
    var b = a + 1
    document.querySelector("#res_soma").innerHTML = `O valor da soma é: ${b}`
}

function subtrair() {
    var c = parseInt(document.querySelector("#valor").value)
    var d = c - 1
    document.querySelector("#res_sub").innerHTML = `O valor da subtração é: ${d} `

}