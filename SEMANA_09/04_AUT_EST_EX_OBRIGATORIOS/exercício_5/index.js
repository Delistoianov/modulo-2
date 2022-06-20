function calcular() {
    let array = []
    var vi = document.querySelector("#num1").value
    var vf = document.querySelector("#num2").value

    for (var c = vi; c <= vf; c++) {
        var prime = true;

        for (let i = 2; i < c; i++) {
            if (c % i == 0) {
                prime = false
                break
            }
        }
        if (prime) {
            array.push(c)
        }
    }

    document.querySelector("#resultado").innerHTML = array


}


