function somar() {
    var tn1 = window.document.querySelector("#num1")
    var tn2 = window.document.querySelector("#num2")
    var res = window.document.querySelector("#resultado")
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var soma = n1 + n2
    console.log(soma)
    document.getElementById('prg').textContent = soma
}

function subtrair() {
    var tn3 = window.document.querySelector("#num3")
    var tn4 = window.document.querySelector("#num4")
    var res = window.document.querySelector("#resultado")
    var n3 = Number(tn3.value)
    var n4 = Number(tn4.value)
    var subtracao = n3 - n4
    console.log(subtracao)
    document.getElementById('subt').textContent = subtracao
}

function multiplicar() {
    var tn5 = window.document.querySelector("#num5")
    var tn6 = window.document.querySelector("#num6")
    var res = window.document.querySelector("#resultado")
    var n5 = Number(tn5.value)
    var n6 = Number(tn6.value)
    var multiplicacao = n5 * n6
    console.log(multiplicacao)
    document.getElementById('mult').textContent = multiplicacao
}


function dividir() {
    var tn7 = window.document.querySelector("#num7")
    var tn8 = window.document.querySelector("#num8")
    var res = window.document.querySelector("#resultado")
    var n7 = Number(tn7.value)
    var n8 = Number(tn8.value)
    var divisao = n7 / n8
    console.log(divisao)
    document.getElementById('divi').textContent = divisao
}


function restor() {
    var tn9 = window.document.querySelector("#num9")
    var tn10 = window.document.querySelector("#num10")
    var res = window.document.querySelector("#resultado")
    var n9 = Number(tn9.value)
    var n10 = Number(tn10.value)
    var resto = n9 % n10
    console.log(resto)
    document.getElementById('rest').textContent = resto
}


function divint() {
    var tn11 = window.document.querySelector("#num11")
    var tn12 = window.document.querySelector("#num12")
    var res = window.document.querySelector("#resultado")
    var n11 = Number(tn11.value)
    var n12 = Number(tn12.value)
    var dint = parseInt(n11 / n12)
    console.log(dint)
    document.getElementById('divinti').textContent = dint
}