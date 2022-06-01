/*Crie uma página web que permita ao usuário informar a quantidade de pessoas (número inteiro inteiro) e o
 período (Noturno ou Diurno) e, quando o usuário indicar que deseja que o cálculo seja realizado (pressionar
 um botão), mostre o total da compra de acordo com as condições abaixo:

Se vôo diurno, 200 por pessoa. Se mais do que 50 pessoas, desconto de 40% por pessoa.
Se vôo noturno, 100 por pessoa. Se mais do que 50 pessoas, desconto de 20% por pessoa. */

function calcular() {
    var periodo = document.getElementsByName("radioper")
    let total;
    //diurno
    if (periodo[0].checked) {
        var numPessoas = parseInt(document.querySelector("#pessoas").value)
        if (numPessoas > 50) {
            total = numPessoas * 120
            document.querySelector("#ativar").innerHTML = `o valor por pessoa é R$120 e o valor total é R$${total}. `
        }
        else {
            total = numPessoas * 200
            document.querySelector("#ativar").innerHTML = `o valor por pessoa é R$200 e o valor total é R$${total}.`
        }
    }

    //noturno
    else if (periodo[1].checked) {
        var numPessoas = parseInt(document.querySelector("#pessoas").value)
        if (numPessoas > 50) {
            total = numPessoas * 80
            document.querySelector("#ativar").innerHTML = `o valor por pessoa é R$80 e o valor total é R$${total}.`
        }
        else {
            total = numPessoas * 100
            document.querySelector("#ativar").innerHTML = `o valor por pessoa é R$100 e o valor total é R$${total}.`
        }
    }
}


