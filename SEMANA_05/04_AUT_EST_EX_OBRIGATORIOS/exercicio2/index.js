function calcular() {
    var input = document.querySelector("#preco").value
    nota100 = parseInt(input / 100);
    nota50 = parseInt((input % 100) / 50)
    nota20 = parseInt(((input % 100) % 50) / 20)
    nota10 = parseInt((((input % 100) % 50) % 20) / 10)
    nota5 = parseInt(((((input % 100) % 50) % 20) % 10) / 5)
    nota2 = parseInt((((((input % 100) % 50) % 20) % 10) % 5) / 2)
    nota1 = parseInt((((((input % 100) % 50) % 20) % 10) % 5) % 2)

    if (nota100) document.querySelector("#t100").innerHTML = nota100 + " notas de R$100";

    if (nota50) document.querySelector("#t50").innerHTML = nota50 + " notas de R$50";

    if (nota20) document.querySelector("#t20").innerHTML = nota20 + " notas de R$20";

    if (nota10) document.querySelector("#t10").innerHTML = nota10 + " notas de R$10";

    if (nota5) document.querySelector("#t5").innerHTML = nota5 + " notas de R$5";

    if (nota2) document.querySelector("#t2").innerHTML = nota2 + " notas de R$2";

    if (nota1) document.querySelector("#t1").innerHTML = nota1 + " notas de R$1";
}