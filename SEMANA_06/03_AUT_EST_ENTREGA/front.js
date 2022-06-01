document.querySelector("#linha").innerHTML = "Acesse o link:"

function showLink() {
    $('#link').css('display', 'block');
    $('#hideButton').css('display', 'none');
}

function aparece() {
    $.get("http://localhost:1590/usuario", function (botao) {
        var res = JSON.parse(botao)
        $("#nacionalidade").html(res.nacionalidade);
        $("#endereço").html(res.endereco);
        $("#telefone").html(res.telefone);
        $("#email").html(res.email);

    })
}
