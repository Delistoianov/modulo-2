function troca() {
    var a = document.querySelector("#num1").value
    var b = document.querySelector("#num2").value
    document.querySelector("#val1").innerHTML = `Depois da troca o valor um passou a ser: ${b}`
    document.querySelector("#val2").innerHTML = `Depois da troca o valor dois passou a ser: ${a}`
}

