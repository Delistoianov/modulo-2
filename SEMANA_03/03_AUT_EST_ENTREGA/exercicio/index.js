
function calcular() {

    var vi = document.querySelector("#valor").value
    console.log(vi)
    var hmax = vi ** 2 / (2 * 10)
    console.log(hmax)
    var temp = vi / 10
    console.log(temp)
    document.querySelector("#resultado").innerHTML = `A altura máxima é ${hmax} metros e o tempo de subida é ${temp} segundos`

}