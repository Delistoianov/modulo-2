function calcular() {
    var input = document.querySelector("preco").value
    nota100 = parseInt(input / 100);
    nota50 = parseInt((input % 100) / 50)
    nota20 = parseInt(((input % 100) % 50) / 20)
    nota10 = parseInt((((input % 100) % 50) % 20) / 10)
    nota5 = parseInt(((((input % 100) % 50) % 20) % 10) / 5)
    nota2 = parseInt((((((input % 100) % 50) % 20) % 10) % 5) / 2)
    nota1 = parseInt((((((input % 100) % 50) % 20) % 10) % 5) % 2)

    document.querySelector("t100").innerHTML = nota100 + " notas de R$";

    document.querySelector("t50").innerHTML = nota50 + " notas de R$";

    document.querySelector("t120").innerHTML = nota20 + " notas de R$";

    document.querySelector("t10").innerHTML = nota10 + " notas de R$";

    document.querySelector("t5").innerHTML = nota5 + " notas de R$";

    document.querySelector("t2").innerHTML = nota2 + " notas de R$";

    document.querySelector("t1").innerHTML = nota1 + " notas de R$";
}