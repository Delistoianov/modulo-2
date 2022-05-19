function calc() {
    var consulta = document.querySelector("#preço")
    var c1 = Number(consulta.value)
    var div1 = parseInt(c1 / 100)
    var div2 = parseInt(((c1 % 100) % 100) / 50)
    var div3 = parseInt(((c1 % 100) % 50) / 20)
    var div4 = parseInt(((c1 % 100) % 20) / 10)
    var div5 = parseInt(((c1 % 100) % 10) / 5)
    var div6 = parseInt(((c1 % 100) % 5) / 2)
    var div7 = parseInt(((c1 % 100) % 2) / 1)
    console.log(div7)
    document.getElementById('hj').textContent = div7



}

