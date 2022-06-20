function resultado() {
    var nome = [document.querySelector("#pri").value, document.querySelector("#seg").value, document.querySelector("#ter").value]
    var ordenar = nome.sort((a, b) => {
        return a.localeCompare(b);
    });

    document.querySelector("#ordenação").innerHTML = `a sequência de nomes em ordem crescente é ${ordenar}`

}