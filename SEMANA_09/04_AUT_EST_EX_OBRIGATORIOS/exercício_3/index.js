function resultado() {
    var nome = document.querySelector("#pri") + document.querySelector("#seg") + document.querySelector("#ter")
    var ordenar = nome.sort((a, b) => {
        return a.localeCompare(b);
    });

    document.querySelector("#ordenação").innerHTML = `a sequência de nomes em ordem crescente é ${ordenar}`

}